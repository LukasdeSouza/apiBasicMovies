const express = require('express');
const server = express();
const movies = require('./src/movies.json')

const port = process.env.PORT || 3000


server.get('/filmes', (req,res) =>{
    return res.json({
        movies
    })
})

server.get('/', (req,res) =>{
    return res.json({
        username: "lucas de souza",
        yearsold: "24",
        project: "try /filmes"
    })
})


server.listen(port, ()=>{
    console.log("Servidor está funcionando na porta:" + port)
});