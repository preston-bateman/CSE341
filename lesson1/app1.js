const http = require('http');

const server = http.createServer((req, res) => {    
    if (req.url === '/'){
        res.write('Preston Bateman. Access the name of my childhood best friend by adding a /friends');
        res.end();
    }
    if(req.url === "/friends") {
        res.write('Ben Midgley')
        res.end();
    }

});

server.listen(3000);

console.log('Listening on Port 3000...');