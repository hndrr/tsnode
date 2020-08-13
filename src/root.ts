import http from "http";
import fs from "fs";
import ejs from "ejs";
import url from "url";
import qs from "querystring";

//同期処理
const template = fs.readFileSync("src/template.ejs", "utf8");
const form = fs.readFileSync("src/form.ejs", "utf8");
const boot_css = fs.readFileSync(
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "utf8"
);
const style_css = fs.readFileSync("src/style.css", "utf8");

let server = http.createServer(getFromCrient);
server.listen(3000);
console.log("server Start");

function getFromCrient(request: any, response: any): void {
  let url_parse = url.parse(request.url, true); //第２引数trueでqueryオブジェクトを作成
  switch (url_parse.pathname) {
    case "/":
      //第2引数にオブジェクトを渡す
      let content_info = {
        title: "ejsテンプレート",
        content: "ejsテンプレートを使ったページ",
      };
      let content = ejs.render(form, content_info);
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

function response_other(request: any, response: any): void {
  if (request.method == "POST") {
    let body = "";
    request.on("data", (data: string) => {
      body += data;
    });
    request.on("end", () => {
      let post_data = qs.parse(body);
      let msg = post_data.msg;
      let content2 = ejs.render(template, {
        title: "other",
        content: msg,
      });
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(content2);
      response.end();
    });
  } else {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      ejs.render(template, {
        title: "other",
        content: "Not Found",
      })
    );
    response.end();
  }
}
