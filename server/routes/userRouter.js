const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const cookieController = require('../controllers/cookieController')

// Changed get to post as we're checking for the user's login information
router.post('/login', userController.verifyLogin, cookieController.setSSIDCookie,
(req, res) => { 
  return res.redirect('/mainpage')
});

router.post('/signup', userController.createUser, 
(req, res) => {
  res.status(200).json(res.locals.data);
});

router.get('/mainpage', userController.getInfo,
(req, res) => {
  res.status(200).json(res.locals.userInfo);
})

module.exports = router