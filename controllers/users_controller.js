const express = require('express');
// const { User } = require('../models');
const router = express.Router()
const db = require('../models')


router.get('/register',  (req, res,) => {
    res.render('register.ejs')
});


router.post('/register', async (req, res, next) => {
    try {
        const newUser = await db.User.create(req.body);
        // console.log(req.body)
        console.log(newUser)
        res.redirect('/users/register');
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
    // res.render('profile.ejs')
})


// router.post('/profile/:id', async (req, res, next) => {
//     try {
//         const foundUser = await db.User.find(req.params.id)
//         // const allUsers = await db.
//         console.log(foundUser)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

// router.get('/login', async (req, res, next) => {
//     try {
//         // const newUser = await db.User.find({});
//         // const context = { newUser }
//         // console.log(newUser);
//          return res.render('login.ejs');
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });
// router.post('/login', (req, res) => {
//     // Insert Login Code Here
//     let username = req.body.username;
//     let password = req.body.password;
//     res.send(`Username: ${username} Password: ${password}`);
//     // res.render('/login')
// });

module.exports = router
