"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
let server = http_1.default.createServer(getFromCrient);
function getFromCrient(request, response) {
    //非同期処理
    fs_1.default.readFile('dist/server.html', 'UTF-8', (error, data) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();
    });
}
server.listen(3000);
console.log('server Start');
//# sourceMappingURL=server.js.map