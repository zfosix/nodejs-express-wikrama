const {
    someData,
    someFunction,    
} = require('./commontTest')

const {
    MyPromise,
    panggilPromise
} = require('./promiseTest')

var http = require('http')

var server = http.createServer(function(req, res) {
    switch (req.url) {
        case '/home':
            res.write("Hi, Selamat datang di nodejs")
            res.end()
            break;
        case '/commont':
            res.write('some data ' + someData + '\nsome function ' + someFunction())
            res.end()
            break;
        case '/promise':
            (async function () {
                await MyPromise.then((result) => {
                    res.write(result)
                    res.end()
                }).catch((error) => {
                    res.write(error)
                    res.end()
                })
            })()
            break;
        case '/test-promise':
            (async () => {
                await panggilPromise(5, 1000).then((data) => {
                    console.log(data)
                }).catch((error) => {
                    console.log(error)
                })
                await panggilPromise(6, 1000).then((data) => {
                    console.log(data)
                }).catch((error) => {
                    console.log(error)
                })
                await panggilPromise(7, 1000).then((data) => {
                    console.log(data)
                }).catch((error) => {
                    console.log(error)
                })
            })()
            res.write('berhasil memanggil promise, promise akan muncul di terminal')            
            res.end()
            break;
        default:
            res.write('url tidak ditemukan')
            res.end()
            break;
    }           
})

const port = 5000

server.listen(port)

console.log(`Server running on port ${port}`)