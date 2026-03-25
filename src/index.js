require('dotenv').config()
console.log(process.env.PORT)
var cors = require('cors')
const cookieParser = require('cookie-parser');
const express = require('express')
const routes = require('./routes/api/v1/index')
const mongodbConnection = require('./db/dbconnection');
const passport = require('passport');
const googleprovider = require('./service/provider');
const connectsocketio = require('./service/socketIO');

const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/public',express.static('public'))

app.use(cors({
    origin: 'https://elevate-knowledge-silk.vercel.app',
    optionsSuccessStatus: 200,
    credentials:true
}))

googleprovider.googleprovider() //jyare sever chalu thay tyare j google stahe connection banave
googleprovider.faceookprovider();

mongodbConnection() //jyare sever chalu thay tyare j mongodb stahe connection banave
connectsocketio();

//http://localhost:8080/api/v1
app.use('/api/v1', routes) //All routes inside routes start with /api/v1

app.get('/',(req,res) => {
    res.send('welcome to lms backend... ')
})

// app.listen(process.env.PORT, () => {
//     console.log(`app run at port ${process.env.PORT}`)
// })

module.exports = app;