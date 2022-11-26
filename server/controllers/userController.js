const db = require('../models/userModel');
const bcrypt = require('bcryptjs');

userController = {};

const SALT_WORK_FACTOR = 10;

userController.verifyLogin = (req, res, next) => {
  try {
    const { Username, Password } = req.body;
    Password = bcrypt.hashSync(Password, SALT_WORK_FACTOR);
    const text = 'SELECT Email, Password FROM Users WHERE Email = $1 AND Password = $2;'
    db.query(text, [Username, Password])
      .then(data => {
        res.locals.data = data;
      })
    return next();
  } catch (e) {
    const errorObject = {
      log: 'error in userController.verifyLogin',
      status: 400,
      message: {err: e}
    }
    return next(errorObject);
  }
};

userController.createUser = (req, res, next) => {
  try {
    const { LastName, FirstName, Email, Password, Linkedin, YOE, DevStatus, Languages, CurrentRole, Location } = req.body
    const hashPass = bcrypt.hashSync(Password, SALT_WORK_FACTOR);
    const text = `INSERT INTO Users (LastName, FirstName, Email, Password, Linkedin, YOE, DevStatus, Languages, CurrentRole, Location) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`
    db.query(text, [LastName, FirstName, Email, hashPass, Linkedin, YOE, DevStatus, Languages, CurrentRole, Location], (err, result) =>{
      return next();
    })
  } catch (e) {
    const errorObject = {
      log: 'error in userController.createUser',
      status: 400,
      message: {err: e}
    }
    return next(errorObject);
  }
};

userController.getInfo = (req, res, next) => {
  const str = `SELECT * FROM Users WHERE PersonID =  ${req.query.id}`;
  db.query(str, (err, result) => {
    if(err){
      const errorObject = {
        log: 'error in userController get info',
        status: 400,
        message: {err: 'Query for user info failed'}
      }
      return next(errorObject);
    }
    res.locals.userInfo = result.rows;
    return next();
  })
};

module.exports = userController;