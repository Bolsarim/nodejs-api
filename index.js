const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Hello World")
})

app.get("/pt-br", function(req, res){
    res.send("Olá, mundo")
})

app.get("/produtos", function(req, res){
    res.send("Lista de Produtos")
})

app.listen(3000)