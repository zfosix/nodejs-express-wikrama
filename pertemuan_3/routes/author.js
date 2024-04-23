const express = require('express')
const router = express.Router()

router.get('/' , (req, res) => {
     res.write('GET author code')
     res.end()
})

router.post('/' , (req, res) => {
     res.write('POST author code')
     res.end()
})

router.put('/' , (req, res) => {
     res.write('PUT author code')
     res.end()
})

router.delete('/', (req, res) => {
     res.write('DELETE author code')
     res.end()
 })
 

module.exports = router 