const express = require('express');

// create instance of express
const app = express();    // app is an object here.

const postsRoute = require('./routes/posts');
app.use("/posts", postsRoute);  // use() method works as middleware not object. Be aware of that.
// here (/posts) is a prefix.

// exporting module so that other modules can use these routes.
module.exports = app;