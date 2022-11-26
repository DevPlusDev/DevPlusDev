const db = require('./models/userModel.js');

userController = {};

// userController.verifyLogin = (req, res, next) => {
// arturo to do
// };

userController.createUser = (req, res, next) => {
  const {LastName, FirstName, Email, Linkedin, YOE, DevStatus, Languages, CurrentRole, Location } = req.body
  const newRow = `INSERT INTO Users (LastName, FirstName, Email, Linkedin, YOE, DevStatus, Languages, CurrentRole, Location) VALUES ('${LastName}', '${FirstName}', '${Email}', '${Linkedin}', '${YOE}', '${DevStatus}', '${Languages}', '${CurrentRole}', '${Location}');`
  db.query(str, (err, result) =>{
    return next();
  });
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