const express = require('express')
const port = process.env.PORT || 2000
const connection = require('./model/db')
connection()
const data = require('./controller/product')
const {getProducts,getProguctById} = require('./controller/getPro')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use('/getPro',getProducts)
app.use('/getProId/:_id',getProguctById)
app.listen(port,()=>{
    console.log(`running on ${port}`)
})
data();