const express = require('express');
// const { User } = require('../models');

const router = express.Router()

const db = require('../models')



router.get('/register',  (req, res,) => {
//     try {
    //         const newUser = await db.User.find({});
    //         const context = { newUser }
    //         // console.log(newUser);
    //         res.render('register.ejs',);
    //     } catch (error) {
        //         console.log(error);
        //         req.error = error;
        //        return next();
        //  }
     res.render('register.ejs')
});
        
        
        
        
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


// router.post('/', (req, res) => {
//     // Insert Login Code Here
//     let username = req.body.username;
//     let password = req.body.password;
//     res.send(`Username: ${username} Password: ${password}`);
//     // res.render('/login')
// });


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

module.exports = router
