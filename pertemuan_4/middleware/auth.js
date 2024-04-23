const express = require('express')
const bookRoute = require('../routes/book')
const authRoute = require('../routes/auth')
const jwt = require('jsonwebtoken')
const { user } = require('../config/database')
const accessTokenSecret = '2023-wikrama-exp'

const app = express()
app.use(express.json())
app.use(
     express.urlencoded({
          extended: true
     })
)

const authenticateJWT = (req, res, next) => {
     const authHeader = req.headers.authorization

     if (!authHeader) {
          return res.status(493).json({
               'messege': 'Unauthorized'
          })
     }

     const token = authHeader.split(' ')[1]

     jwt.verify(token, accessTokenSecret, (err, user) => {
          if (err) {
               return res.status(403).json({
                    'messege': 'Unauthorized'
               })
          }
          next()
     })
}

module.exports = authenticateJWT