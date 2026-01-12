const mongoose = require('mongoose');

const mongodbConnection = async() => {
    try {
       await mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("mongodb coonection suucessfully"))
        .catch((error) => console.log("mongodb connection error" + error))
    } catch (error) {
        console.log("mongodb connection error" + error)
    }
}

module.exports = mongodbConnection;