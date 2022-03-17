/** 
 * file: app.js
 * description: file responsible for perform the connection with the file 'server.js'
 * date 16/03/2022 
 * author: eduardo.Flima  
 */

 const express = require('express');
 const cors = require('cors');


const app = express();


// API routes (Employee)

const index = require('./routes/index');

const employeeRoute = require('./routes/employee.routes');

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.json({type : 'application/vnd.api+json'}));

app.use(cors())

app.use(index);

app.use('/api/',employeeRoute);

module.exports = app;
