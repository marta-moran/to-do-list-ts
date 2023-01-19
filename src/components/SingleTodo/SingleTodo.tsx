import React from "react";
import { Todo } from "../../model";
import "./Singletodo.css";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import Todolist from "../Todolist/Todolist";
import { useState } from "react";
import { CgCheckR } from "react-icons/cg";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, todos, setTodos }: Props) {
  const [edit, setEdit] = useState(false);

  const handleEditAction = (id: number) => {
    setEdit(true);
  };

  const handleDeleteAction = (id: number) => {
    setTodos(todos.filter((element) => element.id !== id));
  };

  const handleDoneAction = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="todos__singles">
      { 

      edit ? 
      <div>
        <input type="text"></input><span className="icon"><CgCheckR /></span>
      </div> : (
        
      <div>
      {
      todo.isDone ? (
        <span className="single__text" style={{textDecoration: "line-through",color: "rgb(239, 38, 109)"}}>
          {todo.todo}
        </span>
      ) : (
        <span className="single__text">{todo.todo}</span>
      )}

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
    </div>
      )
      }
    </form>





  );
}

export default SingleTodo;

// {

//   edit ? <input></input> : null

// }
