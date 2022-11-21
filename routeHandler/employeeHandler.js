const express = require('express');
const router = express.Router();
const connection = require('../Connections/connection');

/* 
get all emplyees 
and using callback function
*/
router.get('/', (req, res) => {
  connection.query('SELECT * FROM employee', (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(rows);
      console.log(rows);
    }
  });
});

/* 
get single employee 
and used callback function
*/
router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM employee WHERE EmployeeID=?',
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(rows);
        console.log(rows);
      }
    }
  );
});

/* 
post api emplyees 
*/
router.post('/', (req, res) => {
  let empData = [req.body.Name, req.body.salary];
  connection.query(
    'INSERT INTO  employee(Name,salary) values(?)',
    [empData],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(rows);
        console.log(rows);
      }
    }
  );
});

/* 
put api for employee 
*/
router.put('/', (req, res) => {
  let empData = req.body;
  connection.query(
    'UPDATE   employee SET ? WHERE EmployeeID=' + empData.EmployeeID,
    [empData],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        if (rows.affectedRows == 0) {
          let empData2 = [req.body.Name, req.body.salary];
          connection.query(
            'INSERT INTO  employee(Name,salary) values(?)',
            [empData2],
            (err, rows) => {
              if (err) {
                console.log(err);
              } else {
                res.status(200).json(rows);
                console.log(rows);
              }
            }
          );
        } else {
          res.status(200).json(rows);
          console.log(rows);
        }
      }
    }
  );
});

/* 
patch api for employee 
*/
router.patch('/', (req, res) => {
  let empData = req.body;
  connection.query(
    'UPDATE   employee SET ? WHERE EmployeeID=' + empData.EmployeeID,
    [empData],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(rows);
        console.log(rows);
      }
    }
  );
});

/* 
delete single employee 
*/
router.delete('/:id', (req, res) => {
  connection.query(
    'DELETE  FROM employee WHERE EmployeeID=?',
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(rows);
        console.log(rows);
      }
    }
  );
});

module.exports = router;
