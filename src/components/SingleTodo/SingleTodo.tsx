import React from "react";
import { Todo } from "../../model";
import "./Singletodo.css";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import Todolist from "../Todolist/Todolist";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, todos, setTodos }: Props) {

  const handleEditAction = (id: number) => {
    
    todos.map(todo => {
      if(todo.id === id) {
        
      }
    //   todo.id === id ? {...todo, isDone: false} : todo
    //   setTodos(todos)
     })
  }

  const handleDeleteAction = (id: number) => {
    // setTodos(todos.map(todo => todo.id !== id ? ))
  }
  
  const handleDoneAction = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
  }


  return (
    <form className="todos__singles">
      {
        todo.isDone ? (
          <s className="single__text">{todo.todo}</s>
        ) : (
          <span className="single__text">{todo.todo}</span>
        )
      }
      {/* <span className="single__text">{todo.todo}</span> */}
      <div>
        <span className="icon" onClick={() => handleEditAction(todo.id)}>
          <AiFillEdit color="rgb(198, 198, 243)"></AiFillEdit>
        </span>
        <span className="icon" onClick={() => handleDeleteAction(todo.id)}>
          <AiFillDelete color="rgb(250, 109, 109)"></AiFillDelete>
        </span>
        <span className="icon" onClick={() => handleDoneAction(todo.id)}>
            <MdDone color="rgb(165, 233, 165)"></MdDone>
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
