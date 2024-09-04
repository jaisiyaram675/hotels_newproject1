const mongoose = require('mongoose');
// yo mongo url mongodb ka server nodejs tai connect kar dega 
const mongooseURL = 'mongodb://localhost:27017/hotels';

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