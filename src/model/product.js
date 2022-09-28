const mongoose = require("mongoose");
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
const Todoschema = new mongoose.Schema({
  id: {
    type: ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model("Product", Todoschema);
