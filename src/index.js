require('dotenv').config()
console.log(process.env.PORT)
var cors = require('cors')
const cookieParser = require('cookie-parser');


const express = require('express')
const app = express()
const routes = require('./routes/api/v1/index')
const mongodbConnection = require('./db/dbconnection')

app.use(express.json());
app.use(cookieParser());

app.use('/public',express.static('public'))

app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials:true
}))

mongodbConnection()

//http://localhost:8080/api/v1
app.use('/api/v1', routes)

app.listen(process.env.PORT, () => {
    console.log(`app run at port ${process.env.PORT}`)
})