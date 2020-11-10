// first step: import express to be used for middleware
const express = require('express');
const dotenv = require('dotenv');

// setup the path for the environment variable
dotenv.config({ path: './config/config.env' });

// variable for the PORT
const PORT = process.env.PORT || 3000;


// then create the instance of the app
const app = express();

// second step: create 2 middleware functions that will log
// app.use((req, res, next) => {
//     console.log("I'm in this first middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("I'm in this second middleware and check your page for a response");
//     res.send('<h1>Welcome to the dummy page</h1>');
// });

// third step: create 2 middleware functions with filters on them, both handling req + res
app.use('/users', (req, res, next) => {
    console.log('I\'m in this other middleware and will return something else');
    res.send('<h1>Welcome to the users page!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('I\'m in this function and will return something');
    res.send('<h1>Welcome to the home page!</h1>');
});

// listening in on the PORT 3000
app.listen(PORT);