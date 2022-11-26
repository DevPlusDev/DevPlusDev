const db = require('../models/userModel');

userController = {};

userController.verifyLogin = (req, res, next) => {
  const { username, password } = req.body;
  const text = 'SELECT username, password FROM Users WHERE username = $1 AND password = $2;'
  db.query(text, [username, password])
    .then(data => {
      res.locals.data = data;
    })
};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  const text = 'INSERT INTO Users (username, password) VALUES ($1, $2);'
  db.query(text, [username, password])
    .then(data => {
      res.locals.data = data;
    })
};

userController.getInfo = (req, res, next) => {

};