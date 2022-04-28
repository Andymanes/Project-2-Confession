const express = require('express')
const methodOverride = require('method-override')
const controllers = require('./controllers')
const app = express()
// const controllers = require('./controllers')

// db connection
require('./config/db.connection')

const PORT = 4000


// app configs - app.set()
app.set('view engine', 'ejs')


// first middleware - middleware executes for every request - 
// express.static helps express find where certain files are located

app.use(express.static('public'))

// method override middleware
// convert a get/post request to a delete (or put) request
app.use(methodOverride('_method'))

// body-parser middleware -> intercept the data from our post request
// take all of the data in the url-string content and create an object - req.params 
// request body -> data - parsed by the middleware

app.use(express.urlencoded({ extended: false }))

// const userController = require('./controllers/users_controller')
app.use('/users', controllers.users) 
// app.use('/comment', controllers.comments)
app.use('/new', controllers.secrets)
app.use('/comments', controllers.comments)
app.use('/secrets', controllers.secrets)


app.get('/', (request, response) => response.send('Welcome to Confessions!'))





app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`)
})
