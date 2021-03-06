// == Usando express para gerar server ==
const express = require('express')
const nunjucks = require('nunjucks')
const courses = require('./data')

const server = express()

//definindo para o express onde encontra os arquivos estáticos
server.use(express.static("public"))

// server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true
})

// Configuração de caminhos
server.get("/", function(req, res) {
    return res.render("courses", { items: courses })
})

server.get("/about", function(req, res) {
    const about = {
        icone_img: "/images/Mf1UjRa0_400x400.jpg",
        name_title: "Rocketseat",
        description: "Mais do que uma plataforma de educação em tecnologia, uma comunidade incrível de devs em busca do próximo nível.",
        title: "Principais Tecnologia",
        links_tec: [
            {name: "JavaScript", url_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"},
            {name: "JavaScript ES6+", url_img: "https://images-na.ssl-images-amazon.com/images/I/41ArBHPnonL.png"},
            {name: "NodeJS", url_img: "data:image/png;base64,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"},
            {name: "ReactJS", url_img: "https://cdn.auth0.com/blog/react-js/react.png"},
            {name: "React Native", url_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVsRuB03fieU2c1MkxMdIeoRu__mMsEwL40Q&usqp=CAU"}
        ],
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"},
            {name: "Facebook", url: "https://www.facebook.com/rocketseat"}
        ]
    }


    return res.render("about", { about })
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id

    const course = courses.find(function(course) {
        return course.id == id
    })
  
    if (!course) {
        return res.render("not-found")
    }

    return res.render("course", { item: course })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

// Mostrando em que porta o servidor estará usando
server.listen(5000, function() {
    console.log("server is running")
})