import React from 'react'
import './Todolist.css'
import { Todo } from '../../model'
import SingleTodo from '../SingleTodo/SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }
  
const Todolist = ({todos, setTodos} : Props) => {
  return (
    <div className='todos'>
        {
            todos.map(todo => 
            <SingleTodo 
                todo={todo} 
                todos={todos}
                key={todo.id}
                setTodos={setTodos}></SingleTodo>)
        }
    </div>
  )
}

export default Todolist
