const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();


// connect to database
connectDB()

// Init middleware
app.use(express.json({extended: false}))

// app.get('/', (req, res) => res.json({msg: 'Welcome to todo keeper app'}))

// defining routes



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on Port${PORT}`))