const mongoose = require('mongoose')

require('dotenv').config()

const connectionString = process.env.MONGODB_URI

mongoose.connect(connectionString)

mongoose.connection.on('connected', ()=>{
    console.log('We are connected.')

})


mongoose.connection.on('error', ()=>{
    console.log(`it have an error ${error}`)
})

mongoose.connection.on('disconnected', ()=>{
    console.log('Mongo disconnected')
})