import http from 'http';
import fs from 'fs';
import ejs from 'ejs';

//同期処理
const template = fs.readFileSync('dist/template.ejs', 'utf8');
let server = http.createServer(getFromCrient);

function getFromCrient(request: any, response: any): void {
    let content = ejs.render(template);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(content);
    response.end();
}

server.listen(3000);
console.log('server Start');