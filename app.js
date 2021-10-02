const express = require('express')

const app = express()


app.get("/", (req, res) =>{

    res.send("I am from get method from server")
})
app.get("/about", (req, res) =>{

    res.send("I am about route form server")
})
app.get("/contact", (req, res) =>{

    res.send("I am contact method from server")
})

module.exports = app;

