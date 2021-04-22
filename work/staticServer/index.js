const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const mime = require('mime')

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url)
    const absPath = path.join(__dirname, 'entry', pathname)
    
    fs.stat(absPath, (err, stat) => {
        if (err) {
            res.statusCode = 404
            res.end('Not Found')
            return
        }
        if (stat.isFile()) {
            fs.readFile(absPath, (err, result) => {
                res.setHeader('Content-Type', `${mime.getType(absPath)};charset=utf-8`)
                res.end(result)
            })
        } else {
            fs.readFile(path.join(absPath, 'index.html'), (err, result) => {
                res.setHeader('Content-Type', `${mime.getType(absPath)};charset=utf-8`)
                res.end(result)
            })
        }
    })
})

server.listen(3000, () => {
    console.log(`server is running on localhost:3000`)
})