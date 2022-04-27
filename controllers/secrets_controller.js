// /*
// Secret routes include:

// show
// edit
// delete
// update

// */
// const express = require('express')
// // import express to access Router function

// const router = express.Router()
// // creates an instance of the router 

// /* 
//     App Data:
//     The products routes below accesses data from the 'products' array (DB) by its index value - we will use 'productId' as the param key.
// */

// // MODELS
// const db = require('../models')

// // express.Router breakdown 
// // incoming request to: http://localhost:4000/products
// // in server.js we have the following code - app.use('/products', products_controller)

// // the products controller's express.Router will then take on processing the request: 

// // app.use passes the request {} to the products_controller.js module
// // the request evaluates the available routes in the module
// // if a matching URL path is found, that route's callback is executed
// // otherwise, the remaining routes in server.js (after the middleware) will execute


// /*  Beginning of Secrets routes */

// // get all secrets route
// router.get('/', async (req, res, next) => {
//     try {
//         const secrets = await db.Secret.find({});
//         const context = { secrets }
//         console.log(secrets);
//         return res.render('index.ejs', context);
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

// // Secret "new" route - GET request- displays form for creating a new product

// router.get('/new', (req, res) => {
//     res.render('new.ejs')
// })



// // Secrets "show" route - GET request - display details about one product 
// // http://localhost:4000/confessions/0

// router.get('/confessions/:id/', async (req, res, next) => {
//     try {
//         const foundSecret = await db.Secret.findById(req.params.id)
//         const allComments = await db.Comment.find({secret: req.params.id})
//         console.log(allComments.length, 'Comments Found');
//         const context = { 
//             oneSecret: foundSecret,
//             comments: allComments,
//             message: "Hello there"
//         }
//         return res.render('show.ejs', context)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })



// // Secrets "edit" route - GET request - display an edit form for one secret
// // http://localhost:4000/confessions/0/edit

// router.get('/:id/edit', async (req,res, next)=>{
//     try {
//         const updatedSecret = await db.Secret.findById(req.params.id);
//         console.log(updatedSecret);
//         const context = {
//             secret: updatedSecret
//         }
//         return res.render('edit.ejs', context)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })



// // Secret "index" route - GET request - displays all products
// // http://localhost:4000/confessions

// // router.get('/', (req, res) => {
// //     // res.send(products)
// //     const context = { products }
// //     res.render('index', context)
// // })

// // Products "create" route - POST request -> request body (new product data)

// // http://localhost:4000/products/

// router.post('/', async (req, res, next) => {
//     try {
//         // console.log(`The req.body is ${req.body}`)
//         const createdProduct = await db.Product.create(req.body);
//         console.log(`The created product is ${createdProduct}`)
//         res.redirect('/products');
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })



// // Products "destroy" route - DELETE request - removes data from products database and redirects to index route

// // http://localhost:4000/products/0/ 

// router.delete('/:id', async (req,res, next)=>{
//     try {
//         const deletedProduct = await db.Product.findByIdAndDelete(req.params.id);
//         // delete one product (req.params.id)
//         // find all reviews where product == req.params.id | delete those as well
//         const deletedReviews = await db.Review.deleteMany({product: req.params.id})
//         // confirming the deletion of reviews 
//         // 'orphan' documents in our reviews collection are removed

//         console.log(deletedReviews);
//         return res.redirect('/products')
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })



// // Products "update" route - PUT request - update the Products array and redirects to show route
// // http://localhost:4000/products/0/

// router.put('/:id', async (req, res, next)=>{
//     try {
//         const updatedProduct = await db.Product.findByIdAndUpdate(req.params.id, req.body);
//         console.log(updatedProduct);
//         return res.redirect(`/products`)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })


// module.exports = router