const express = require('express');
const connection = require('./Connections/connection');
const employeeHandler = require('./routeHandler/employeeHandler');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

/* middleware */
app.use(cors());
app.use(express.json());

/* 
application routes
*/

app.use('/employees', employeeHandler);

app.listen(port, () => {
  console.log('listening from port', port);
});
