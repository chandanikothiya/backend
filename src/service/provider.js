const passport = require('passport');
const users = require("../models/user.model")

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const googleprovider =  () => {
    try {

        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:8080/api/v1/user/auth/google/callback"
        },
            async function (accessToken, refreshToken, profile, cb) {
                console.log(profile)

                const userdata = await users.findOne({ email: profile.emails[0].value });

                if (!userdata) {
                    const user = await users.create({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        profileid: profile.id
                    })

                    return cb(null, user)
                }

                return cb(null, userdata);

                // User.findOrCreate({ googleId: profile.id }, function (err, user) {
                //     return cb(err, user);
                // });
            }
        ));


        //The user id (you provide as the second argument of the done function) is saved in
        //  the session and is later used to retrieve the whole object via the deserializeUser function.
        // /serializeUser determines which data of the user object should be stored in the session.
        //  The result of the serializeUser method is attached to the session as req.session.passport.user = {}. 

        passport.serializeUser(function (user, done) {
            done(null, user._id);
        });

        passport.deserializeUser(async function (_id, done) {
            const user = await users.findById(_id);

            if (user) {
                done(null, user);
            } else {
                done("user not deserilize", null);
            }
        });


    } catch (error) {
        console.log(error)
    }
}

const faceookprovider = () => {
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:8080/api/v1/user/auth/facebook/callback",
        // passReqToCallback: true,
        // profileFields: ['id', 'emails', 'name']
    },
        async function (accessToken, refreshToken, profile, cb) {
            console.log(profile)
            const user = await users.create({
                name: profile.displayName,
                // email: profile.emails[0].value,
                profileid: profile.id
            })

            // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            //     return cb(err, user);
            // });
        }
    ));
}

module.exports = {
    googleprovider,
    faceookprovider
}