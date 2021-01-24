// == Usando express para gerar server ==
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//definindo para o express onde encontra os arquivos estáticos
server.use(express.static("public"))

// server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

// Configuração de caminhos
server.get("/", function(req, res) {
    return res.render("courses")
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

// Mostrando em que porta o servidor estará usando
server.listen(5000, function() {
    console.log("server is running")
})