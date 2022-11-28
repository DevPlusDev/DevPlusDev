const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const userRouter = require('./routes/userRouter')


// Root

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * handle requests for static files
 */

// app.use('/signup', express.static(path.join(__dirname, '../scripts/signup.html')))
// app.use('/mainpage', express.static(path.join(__dirname, '../scripts/mainpage.html')))
app.use(express.static(path.resolve(__dirname, '../client')));



/**
 * define route handlers
 */
app.use('/', userRouter);

// Route handler for any unknown endpoints 
app.use((req, res) => res.status(404).send("This is not the page you're looking for..."));

// Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;

