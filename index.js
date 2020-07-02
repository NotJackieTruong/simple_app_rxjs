const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./router/index')

const mongooseUrl = 'mongodb://127.0.0.1:27017/simple_app_rxjs'

app.use('/', router)
app.listen(3000, ()=>{
  console.log('Listening on port 3000')
})