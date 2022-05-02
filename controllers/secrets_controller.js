const express = require('express')
// import express to access Router function
const router = express.Router()
// creates an instance of the router
/*
    App Data:
    The secret routes below accesses data from the 'secrets' array (DB) by its index value - we will use 'secretId' as the param key.
*/
// MODELS
const db = require('../models')

router.get('/', async (req, res, next) => {
    try {
        const secrets = await db.Secret.find({}).populate('username');
        const context =  {secrets}
        res.render('index.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
       return next();
    }
});




// Secrets "new" route - GET request- displays form for creating a new secret
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Secrets "show" route - GET request - display details about one secret
// http://localhost:4000/secrets/0
router.get('/:id/', async (req, res, next) => {
    try {
        const foundSecret = await db.Secret.findById(req.params.id)
        const allComments = await db.Comment.find({secret: req.params.id})
        console.log(allComments.length, 'Comments Found');
    
        const context = { 
            oneSecret: foundSecret,
            comments: allComments,
            message: "Join the Discourse- Add a Comment!"
        }
        console.log(context)
        return res.render('show.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})



// Secrets "edit" route - GET request - display an edit form for one secret
// http://localhost:4000/secrets/0/edit
router.get('/:id/edit', async (req,res, next)=>{
    try {
        const updatedSecret = await db.Secret.findById(req.params.id);
        console.log(updatedSecret);
        const context = {
            secret: updatedSecret
        }
        return res.render('edit.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
// Secret "index" route - GET request - displays all secrets
// http://localhost:4000/secrets



// Secrets "create" route - POST request -> request body (new product data)
// http://localhost:4000/secrets/
router.post('/', async (req, res, next) => {
    try {
        const userSecret = await db.User.find({username: req.body.username})
        req.body.username = userSecret[0]._id
        console.log(req.body)
        const createdSecret = await db.Secret.create(req.body);
        res.redirect('/secrets');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


router.post('/:id', async (req, res, next)=>{
    try {
        const id = req.params.id
        const newCreatedComment = req.body
        const createdComment = await db.Comment.create(newCreatedComment)       
        console.log(createdComment)
        res.redirect('/secrets')
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// Secrets "destroy" route - DELETE request - removes data from secrets database and redirects to index route
// http://localhost:4000/secrets/0/
router.delete('/:id', async (req,res, next)=>{
    try {
        const deletedSecret = await db.Secret.findByIdAndDelete(req.params.id);
        const deletedComments = await db.Comment.deleteMany({secret: req.params.id})
        console.log(deletedSecret);
        return res.redirect('/secrets')
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})



// Secrets "update" route - PUT request - update the Secrets array and redirects to show route
// http://localhost:4000/secrets/0/
router.put('/:id', async (req, res, next)=>{
    try {
        const updatedSecret = await db.Secret.findByIdAndUpdate(req.params.id, req.body);
        return res.redirect(`/secrets`)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


module.exports = router
