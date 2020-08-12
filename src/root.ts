import http from 'http';
import fs from 'fs';
import ejs from 'ejs';
import url from 'url';

//同期処理
const template = fs.readFileSync('src/template.ejs', 'utf8');
const style_css = fs.readFileSync('src/style.css', 'utf8');

let server = http.createServer(getFromCrient);
server.listen(3000);
console.log('server Start');

function getFromCrient(request: any, response: any): void {
    let url_parse = url.parse(request.url, true); //第２引数trueでqueryオブジェクトを作成
    switch (url_parse.pathname) {
        case "/":
            //第2引数にオブジェクトを渡す
            let content_info = {
                title: "ejsテンプレート",
                content: "ejsテンプレートを使ったページ"
            };
            //query_paramを取り出して
            let query = url_parse.query;
            if (query.msg != null) {
                content_info.content += '<br> query.msg:' + query.msg;
            }
            let content = ejs.render(template, content_info);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(content);
            response.end();
            break;
        case "/other":
            //第2引数にオブジェクトを渡す
            let content_other = ejs.render(template, {
                title: "other",
                content: "otherページ"
            });
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(content_other);
            response.end();
            break;
        case "/style.css":
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(style_css);
            response.end();
            break;
        default:
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end('Not Found');
            break;
    }
}


