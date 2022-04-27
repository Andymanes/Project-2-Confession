const express = require('express');
// const { User } = require('../models');

const router = express.Router()

const db = require('../models')


router.get('/register', (req, res) => {
     
    res.render('register.ejs')
});