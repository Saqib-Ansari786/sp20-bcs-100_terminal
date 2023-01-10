const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: String,
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
