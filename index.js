const http = require("http");
const fs = require("fs");

const servidor = http.createServer((pedido, resposta) => {
    switch (pedido.url) {
        case '/':
            resposta.writeHead(200, { "Content-Type": "text/html" })
            resposta.end(fs.readFileSync("./index.html"))
            break

        case '/index.css':
            resposta.writeHead(200, { "Content-Type": "text/css" })
            resposta.end(fs.readFileSync("./index.css"))
            break

        case '/execucao.js':
            resposta.writeHead(200, { "Content-Type": "text/javascript" })
            resposta.end(fs.readFileSync("./execucao.js"))
            break
    }
})

servidor.listen(3000)