require('dotenv').config()
console.log(process.env.PORT)

const express = require('express')
const app = express()
const routes = require('./routes/api/v1/index')
const mongodbConnection = require('./db/dbconnection')

app.use(express.json());

mongodbConnection()

//http://localhost:8080/api/v1
app.use('/api/v1',routes)

app.listen(process.env.PORT,() => {
    console.log(`app run at port ${process.env.PORT}`)
})