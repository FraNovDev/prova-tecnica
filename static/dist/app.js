const http = require('http')
const fs = require('fs')
const url = require('url');

const server = http.createServer((req, res) => {
    var pathname = url.parse(req.url, true)
    var relReqPath = pathname.path.substring(1)
    var stream = ((relReqPath.length == 0) ? 'index.html' : relReqPath);
    console.log("requested: " + stream)
    fs.createReadStream(stream).pipe(res)

})
server.listen(3000)