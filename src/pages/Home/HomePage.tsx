import React, { useState } from "react";
import InputField from "../../components/InputField/InputField";
import Todolist from "../../components/Todolist/Todolist";

import { Todo } from "../../model";

function HomePage() {
  const [todo, setTodo] = useState<string>("") //si quisera usar string o number useState<string | number>("")
  const [todos, setTodos] = useState<Todo[]>([])
  console.log(todo)

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
    }
    // todo ? (setTodos([...todos, { id: Date.now(), todo, isDone: false }]), setTodo(""))  : alert("aaa")
  }
  console.log(todos)

  return (
    <div>
      <header className="App-header">
        <h1>Taskify</h1>
      </header>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <Todolist todos={todos} setTodos={setTodos}></Todolist>
    </div>
  );
}

export default HomePage;
