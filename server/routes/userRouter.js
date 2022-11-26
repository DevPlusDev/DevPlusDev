const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// Changed get to post as we're checking for the user's login information
router.get('/login', userController.verifyLogin,
(req, res) => { 
  res.status(200).json('successful login');
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