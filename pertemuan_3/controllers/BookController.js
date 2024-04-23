const mysql = require('mysql2')
const dbConfig = require('../config/database')
const  {
     responseNotFound,
     responseSuccess
} = require('../helper/helper')
const pool = mysql.createPool(dbConfig)

const getBooks = (req, res) => {
     const query = "SELECT * FROM books"

     pool.getConnection((err, connection) => {
          if(err) throw err 
          
          connection.query(query, (err, results) => {
               if(err) throw err

               responseSuccess(res, results, 'Books successfully fetched')
          })

          connection.release()
     })
}

const getBook = (req, res) => {
     const id = req.params.id
     
     const query = `SELECT * FROM books WHERE id =${id}`

     pool.getConnection((err, connection) => {
          if(err) throw err

          connection.query(query, (err, results) => {
               if(err) throw err

               if(results.length == 0) {
                    responseNotFound(res)
                    return
               }
               responseSuccess(res, results, 'Book successfully fetched')
          })
     })
}

module.exports = {
     getBooks
}