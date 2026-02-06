const passport = require('passport');
const users = require("../models/user.model")

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const googleprovider = () => {
    try {

        passport.use(new GoogleStrategy({
            clientID:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:8080/api/v1/user/auth/google/callback"
        },
            function (accessToken, refreshToken, profile, cb) {
                console.log(profile)

                const user = users.create({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    profileid:profile.id
                })

                // User.findOrCreate({ googleId: profile.id }, function (err, user) {
                //     return cb(err, user);
                // });
            }
        ));

    } catch (error) {
        console.log(error)
    }
}

module.exports = googleprovider;