import React, { useEffect, useState } from "react";
import axios from "axios";

export default function todoList() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  useEffect(() => {
    axios
      .get("/todos")
      .then((res) => {
        console.log(res.data);
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Create TodoList</h1>
      <input type="text" placeholder="Enter your todo" />
      <button>
        <h3>Add</h3>
      </button>

      <div>
        <h1>TodoList</h1>
        <ul>
          {todoList.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
