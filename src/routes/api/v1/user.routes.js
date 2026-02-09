const express = require('express');
const { userController } = require('../../../controller');
const passport = require('passport');
const { genratetoken } = require('../../../controller/user.controller');
const router = express.Router();

//http://localhost:8080/api/v1/user/addRegister
router.post('/addRegister', userController.adduser)

//http://localhost:8080/api/v1/user/verifyuser
router.post('/verifyuser', userController.verifyuser)

//http://localhost:8080/api/v1/user/loginuser
router.post('/loginuser', userController.loginuser)

//http://localhost:8080/api/v1/user/loginuser
router.post('/genratenewtoken', userController.genratenewtoken)

//http://localhost:8080/api/v1/user/logout
router.post('/logout', userController.logout)

//http://localhost:8080/api/v1/user/checkauth
router.get('/checkauth', userController.checkauth)



//http://localhost:8080/api/v1/user/auth/google
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));


router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async function (req, res) {
    console.log("callback", req.user)

    const { accesstoken, refreshtoken } = await genratetoken(req.user._id);

    const accoption = {
      httpOnly: true,
      secure: true,
      samesite: null,
      expire: 60 * 60 * 1000
    }

    const refoption = {
      httpOnly: true,
      secure: true,
      samesite: null,
      expire: 60 * 60 * 24 * 7 * 1000
    }

    return res
      .cookie('accesstoken', accesstoken, accoption)
      .cookie('refreshtoken', refreshtoken, refoption)
      .status(200).json({
        success: true,
        data: req.user,
        message: 'Login successfully'
      })


    // Successful authentication, redirect home.
    // res.redirect('/');
  });




//http://localhost:8080/api/v1/user/auth/facebook
router.get('/auth/facebook',
  passport.authenticate('facebook')); //passport.authenticate('facebook', { scope : ['email'] }));

//http://localhost:8080/api/v1/user/auth/facebook/callback
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router