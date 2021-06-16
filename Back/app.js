const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { dbConnection } = require('./db/config');
const path = require('path');
const { createRoles, createAdmin, createProducts, createModerator } = require('./helpers/initialSetup');
require('dotenv').config();

//print the environ process
//console.log(process.env)

// Create the express server 
const app = express();

// We start the Database
dbConnection();

// If it is the first time the program has been run
// Create Roles, Administrator User and 4 Base Products in the database
// Create Admin only is execute when createRoles is finished
createRoles().then(() => {
    createAdmin();
    createModerator();
})
createProducts();

// Read every request and response and display it on the console
app.use(morgan('dev'));

// Public Directory
app.use(express.static('public'));
app.use('/uploads', express.static(path.resolve('uploads')));

// Use CORS
app.use(cors());

// Reading and parsing the body, Indicates that the incoming data is Json
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth.router'));
app.use('/api/users', require('./routes/users.router'));
app.use('/api/products', require('./routes/products.router'));
app.use('/api/request', require('./routes/request.router'));
app.use('/api/roles', require('./routes/roles.router'));
app.use('/api/bills', require('./routes/bills.router'));
app.use('/api/emails', require('./routes/emails.router'));
app.use('/api/marcas', require('./routes/marcas.router'));
app.use('/api/pdf', require('./routes/pdf.router'));

// Handle other angular routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

module.exports = app;