const express = require('express')

const router = express.Router()

const db = require('../models')

// router.get('/', async (req,res,next)=>{
//     try {
//         const allSecrets = await db.Secret.find({})
//         res.send(allSecrets)
//     } catch (error) {
//         console.log(error)
//         req.error = error;
//         return next()
//     }
// })

router.get('/comment', (req,res)=>{
    // try {
    //     const allComments = await db.Comment.find({})
    //     const context = {comments: allComments}
    //     res.render('comment.ejs')
    // } catch (error) {
    //     console.log(error)
    //     req.error = error;
    //     return next()
    // }
    res.render('comment.ejs')
})

module.exports = router