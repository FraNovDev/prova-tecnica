const http = require('http')
const fs = require('fs')
const url = require('url');
const home = 'index.html';

const server = http.createServer((req, res) => {
    var pathname = url.parse(req.url, true)
    var relReqPath = pathname.path.substring(1)
    var stream = ((relReqPath.length == 0) ? home : relReqPath);
    console.log("requested: " + stream)
    if (fs.existsSync(stream)) {
        fs.createReadStream(stream).pipe(res)
    } else {
        console.log("---warning--- requested: '" + stream + "' does not exists! ---warning---")
        fs.createReadStream(home).pipe(res)
        res.writeHead(400);
    }

})
server.listen(3000)