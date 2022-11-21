const mysql = require('mysql2');
require('dotenv').config();

let mySqlConnection = mysql.createConnection({
  host: `${process.env.host}`,
  user: `${process.env.user}`,
  password: `${process.env.password}`,
  database: `${process.env.database}`,
});

mySqlConnection.connect((err) => {
  if (err) {
    console.error(
      'Error in DB connection!' + JSON.stringify(err, undefined, 2)
    );
    return;
  }

  console.log('DB connected successfully');
});

module.exports = mySqlConnection;
