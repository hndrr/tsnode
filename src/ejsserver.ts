import http from 'http';
import fs from 'fs';
import ejs from 'ejs';

//同期処理
const template = fs.readFileSync('src/template.ejs', 'utf8');
//ejsページ内の情報
const page_info = {
    title: "ejsテンプレート",
    content: "ejsテンプレートを使ったページ"
};
let server = http.createServer(getFromCrient);


function getFromCrient(request: any, response: any): void {
    //第2引数にオブジェクトを渡す
    let content = ejs.render(template, page_info);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(content);
    response.end();
}

server.listen(3000);
console.log('server Start');