import './InputStyles.css'
import { useState } from "react";

const InputField = () => {
const [todo, setTodo] = useState<string>("")

/* 
si pasase props del componente padre (se crea el useState del todo,setTodo en el componente HomePage)
Se crea una interfaz porque hay que defeinir el tipo de dato que es  cada uno (todo es un string pero el setTodo es una fucnión )
interface Props {
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<String>>
}

se pasarían las props por la función --> const inputField = ({todo, setTodo}: Props)
*/


  return (
   <form className='form'>
        <input type='input' placeholder='Enter a task' className='input__box' onChange={(e) => setTodo(e.target.value) } />
        <button className='input_submit' type='submit'>Go</button>
   </form>
  )
}


export default InputField