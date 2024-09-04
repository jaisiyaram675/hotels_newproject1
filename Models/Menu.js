const mongoose = require('mongoose');

const  MenuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    taste:{type:String,required:true},
    description: { type: String, required: true },
    category: { type: String, required: true }
});
const Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu