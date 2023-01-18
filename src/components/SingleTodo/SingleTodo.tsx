import React from "react";
import { Todo } from "../../model";
import "./Singletodo.css";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, todos, setTodos }: Props) {
  return (
    <form className="todos__singles">
      <span className="single__text">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit color="rgb(198, 198, 243)"></AiFillEdit>
        </span>
        <span className="icon">
          <AiFillDelete color="rgb(250, 109, 109)"></AiFillDelete>
        </span>
        <span className="icon">
            <MdDone color="rgb(165, 233, 165)"></MdDone>
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
