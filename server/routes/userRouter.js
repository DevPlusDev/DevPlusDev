const path = require('path')
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// Changed get to post as we're checking for the user's login information
router.post('/login', userController.verifyLogin,
(req, res) => { 
  return res.status(200).json({verified: res.locals.verified})
});

router.post('/signup', userController.createUser, 
(req, res) => {
  res.status(200).json(res.locals.data);
});

// router.get('/mainpage',
// (req, res) => {
//   return res.sendFile(path.resolve(__dirname, ''));
// })

module.exports = router