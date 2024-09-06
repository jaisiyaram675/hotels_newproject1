const { default: mongoose } = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  mobile: { type: String, required: true },

  email: { type: String, required: true, unique: true },
  salary: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});
//  here we create a model on the basis of above  a simple blueprints model
const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
