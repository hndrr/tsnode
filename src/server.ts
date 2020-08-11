import http from 'http';

let server = http.createServer(
    (request, response) => {
        response.end('<html><body><h1>Hello Node.js!</h1></body></html>');
    }
);
server.listen(3000);