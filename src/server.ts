import http from 'http';
import fs from 'fs';

let server = http.createServer(
    (request, response) => {
        fs.readFile('dist/server.html', 'UTF-8',
            (error, data) => {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(data);
                response.end();
            }
        );
    }
);
server.listen(3000);
console.log('server Start');