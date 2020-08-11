import http from 'http';

let server = http.createServer(
    (request, response) => {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="ja">');
        response.write('<head><meta charset="UTF-8">');
        response.write('<title>hello</title></head>');
        response.write('<body><h1>Hello Node.js!</h1></body>');
        response.write('</body></html>');
        response.end();
    }
);
server.listen(3000);