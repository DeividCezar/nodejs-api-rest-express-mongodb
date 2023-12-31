const http = require("http")
const port = 3000;

const rotas = {
    "/": "Curso de Node",
    "/livros": "Pagina de livros",
    "/autores": "Pagina de autores",
    "/sobre": "Informacoes sobre projeto"
}

const server = http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log('Servidor escutando em http://localhost:3000')
})