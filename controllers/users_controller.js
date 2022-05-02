const express = require('express');
const router = express.Router()
const db = require('../models')


router.get('/register',  (req, res,) => {
    res.render('register.ejs')
});


router.post('/register', async (req, res, next) => {
    try {
        const newUser = await db.User.create(req.body);
       
        console.log(newUser)
        res.redirect('/secrets');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


router.get('/:id', async (req, res, next) => {
    try {
        const foundUser = await db.User.findById(req.params.id)
        const allSecrets = await db.User.find({secrets: req.params.id})
        const context = {
            thisUser: foundUser,
            secrets: allSecrets
        }
        console.log(foundUser)
        return res.render('profile.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
    
})



module.exports = router
