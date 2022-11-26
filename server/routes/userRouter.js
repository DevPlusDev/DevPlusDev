const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// Changed get to post as we're checking for the user's login information
router.post('/login', userController.verifyLogin, (req, res) => {
  return res.status(200).json(res.locals.data)
})//add controller shit 

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.data)
})//add controller shit. 

router.get('/mainpage', (req, res) => {
  return res.status(200).json('Hi')
})//add controller shit 

