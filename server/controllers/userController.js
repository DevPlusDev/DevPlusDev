const db = require('../models/userModel');
const bcrypt = require('bcryptjs');

userController = {};

const SALT_WORK_FACTOR = 10;

userController.verifyLogin = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;
    const text = 'SELECT Password, UserID FROM Users WHERE Email = $1'
    await db.query(text, [Email])
      .then(data => {
        res.locals.id = data.rows[0].userid;
        res.locals.hashPass = data.rows[0].password;
      })
    if (bcrypt.compareSync(Password, res.locals.hashPass)) {
      res.locals.verified = true;
      return next();
    }
  } catch(e) {
    const errorObject = {
      log: 'error in userController.verifyLogin',
      status: 400,
      message: {err: 'Wrong username or password'}
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

// Update cookie section
userController.getInfo = (req, res, next) => {
  try {
    const { id } = res.locals
    const text = 'SELECT * FROM Users WHERE UserID = $1';
    db.query(text, [id])
  } catch {
    const errorObject = {
      log: 'error in userController get info',
      status: 400,
      message: {err: 'Query for user info failed'}
    }
    return next(errorObject);
  }
};

module.exports = userController;