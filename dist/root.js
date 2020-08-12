"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const ejs_1 = __importDefault(require("ejs"));
const url_1 = __importDefault(require("url"));
//同期処理
const template = fs_1.default.readFileSync('src/template.ejs', 'utf8');
const style_css = fs_1.default.readFileSync('src/style.css', 'utf8');
let server = http_1.default.createServer(getFromCrient);
server.listen(3000);
console.log('server Start');
function getFromCrient(request, response) {
    let url_parse = url_1.default.parse(request.url, true); //第２引数trueでqueryオブジェクトを作成
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
            let content = ejs_1.default.render(template, content_info);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(content);
            response.end();
            break;
        case "/other":
            //第2引数にオブジェクトを渡す
            let content_other = ejs_1.default.render(template, {
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
//# sourceMappingURL=root.js.map