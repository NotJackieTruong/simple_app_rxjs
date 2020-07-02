const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', (res, req)=>{
  res.render('home.ejs')
})

module.exports = router