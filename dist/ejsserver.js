"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const ejs_1 = __importDefault(require("ejs"));
//同期処理
const template = fs_1.default.readFileSync('src/template.ejs', 'utf8');
//ejsページ内の情報
const page_info = {
    title: "ejsテンプレート",
    content: "ejsテンプレートを使ったページ"
};
let server = http_1.default.createServer(getFromCrient);
function getFromCrient(request, response) {
    //第2引数にオブジェクトを渡す
    let content = ejs_1.default.render(template, page_info);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(content);
    response.end();
}
server.listen(3000);
console.log('server Start');
//# sourceMappingURL=ejsserver.js.map