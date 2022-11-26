const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')


router.get('/', userController.verifyLogin,
(req, res) => { 
  console.log('at end of species');
  res.status(200).json('successful login');
});

router.post('/signup', userController.createUser, 
(req, res) => {
  res.status(200).json('success');
});

router.get('/mainpage', userController.getInfo, 
(req, res) => {
  res.status(200).json(res.locals.userInfo);
})