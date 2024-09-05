const mongoose = require('mongoose');
require("dotenv").config();
// yo mongo url mongodb ka server nodejs tai connect kar dega 
// const mongooseURL = 'mongodb://localhost:27017/hotels';
// const mongooseURL="mongodb+srv://gauravdhull888:chutiyagithub888999000@cluster0.urvc6.mongodb.net/"
const mongooseURL =process.env.MONGODB_URL_LOCAL;
// const mongooseURL =process.env.MONGODB_URL;

//  ab yahan se mongodb ka connection set karna hai 
mongoose.connect(mongooseURL,{useNewURLParser: true,
useUnifiedTopology: true

})
//  get the default mongodb connection

const db = mongoose.connection;

//  if connection successful

db.on('connected', ()=> {
    console.log('Connected to MongoDB');
})

//  if connection fails
db.on('error', (err)=> {
    console.log(err);
    
})

//  if connection disconnected

db.on('disconnected', ()=> {
    console.log('Disconnected from MongoDB');
})




module.exports = db;