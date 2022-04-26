const express = require('express')
const controllers = require('./controllers')
const app = express()

const PORT = 4000

app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`)
})
