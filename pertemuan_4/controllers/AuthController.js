const dbConfig = require('../config/database');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const { responseAuthSuccess, responseFailValidate } = require('../traits/ApiResponse');

const pool = mysql.createPool(dbConfig);
const accessTokenSecret = '2023-wikrama-exp';

const register = (req, res) => {
  if (!req.body.email || !req.body.username || !req.body.password) {
    responseFailValidate(res, 'Email/Username/Password wajib diisi');
    return;
  }

  const data = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  const query = 'INSERT INTO users SET ?';

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    connection.query(query, [data], (err, results) => {
      connection.release();

      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed creating user' });
        return;
      }

      if (results.affectedRows >= 1) {
        const user = { email: data.email, username: data.username };

        const token = jwt.sign(user, accessTokenSecret);
        responseAuthSuccess(res, token, 'Register successfully', user);
      } else {
        res.status(500).json({ message: 'Failed creating user' });
      }
    });
  });
};

const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    responseFailValidate(res, 'Email/Password wajib diisi');
    return;
  }

  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    connection.query(query, [email, password], (err, results) => {
      connection.release();

      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }

      if (results.length >= 1) {
        const user = { email: results[0].email, username: results[0].username };

        const token = jwt.sign(user, accessTokenSecret);
        responseAuthSuccess(res, token, 'Login successfully', user);
      } else {
        res.status(404).json({ message: 'Email or password is wrong' });
      }
    });
  });
};

module.exports = {
  register,
  login,
};
