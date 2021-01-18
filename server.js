// == Usando express para gerar server ==
const express = require('express')
const server = express()



// Configuração de caminhos
server.get("/", function(req, res) {
    return res.send("Olá, seja bem vindo!")
})

// Mostrando em que porta o servidor estará usando
server.listen(5000, function() {
    console.log("server is running")
})