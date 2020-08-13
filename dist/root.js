"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const ejs_1 = __importDefault(require("ejs"));
const url_1 = __importDefault(require("url"));
const querystring_1 = __importDefault(require("querystring"));
//同期処理
const template = fs_1.default.readFileSync("src/template.ejs", "utf8");
const form = fs_1.default.readFileSync("src/form.ejs", "utf8");
const boot_css = fs_1.default.readFileSync("node_modules/bootstrap/dist/css/bootstrap.min.css", "utf8");
const style_css = fs_1.default.readFileSync("src/style.css", "utf8");
let server = http_1.default.createServer(getFromCrient);
server.listen(3000);
console.log("server Start");
function getFromCrient(request, response) {
    let url_parse = url_1.default.parse(request.url, true); //第２引数trueでqueryオブジェクトを作成
    switch (url_parse.pathname) {
        case "/":
            //第2引数にオブジェクトを渡す
            let content_info = {
                title: "ejsテンプレート",
                content: "ejsテンプレートを使ったページ",
            };
            let content = ejs_1.default.render(form, content_info);
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(content);
            response.end();
            break;
        case "/other":
            response_other(request, response);
            break;
        case "/style.css":
            response.writeHead(200, { "Content-Type": "text/css" });
            response.write(style_css);
            response.end();
            break;
        case "/bootstrap.min.css":
            response.writeHead(200, { "Content-Type": "text/css" });
            response.write(boot_css);
            response.end();
            break;
        default:
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end("Not Found");
            break;
    }
}
function response_other(request, response) {
    if (request.method == "POST") {
        let body = "";
        request.on("data", (data) => {
            body += data;
        });
        request.on("end", () => {
            let post_data = querystring_1.default.parse(body);
            let msg = post_data.msg;
            let content2 = ejs_1.default.render(template, {
                title: "other",
                content: msg,
            });
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(content2);
            response.end();
        });
    }
    else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(ejs_1.default.render(template, {
            title: "other",
            content: "Not Found",
        }));
        response.end();
    }
}
//# sourceMappingURL=root.js.map