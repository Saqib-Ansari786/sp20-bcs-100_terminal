const Todo = require("../database/models/todoModal");
exports.getTodo = async (req, res, next) => {
  const todos = await Todo.find();

  res.status(200).json({
    success: true,
    data: todos,
  });
};

exports.createTodo = async (req, res, next) => {
  const todo = await Todo.create(req.body);

  res.status(201).json({
    success: true,
    data: todo,
  });
};

exports.updateTodo = async (req, res, next) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!todo) {
    return res.status(400).json({
      success: false,
    });
  }

  res.status(200).json({
    success: true,
    data: todo,
  });
};

exports.deleteTodo = async (req, res, next) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo) {
    return res.status(400).json({
      success: false,
    });
  }

  res.status(200).json({
    success: true,
    data: {},
  });
};

exports.getSingletodo = async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res.status(400).json({
      success: false,
    });
  }

  res.status(200).json({
    success: true,
    data: todo,
  });
};
