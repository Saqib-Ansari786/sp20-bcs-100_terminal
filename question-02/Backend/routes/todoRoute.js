const express = require("express");
const todo = require("../controller/todo");
const router = express.Router();

router.route("/todos").get(todo.getTodo);
router.route("/todo/:id").get(todo.getSingletodo);
router.route("/todo/new").post(todo.createTodo);
router.route("/todos/:id").put(todo.updateTodo);
router.route("/todos/:id").delete(todo.deleteTodo);

module.exports = router;
