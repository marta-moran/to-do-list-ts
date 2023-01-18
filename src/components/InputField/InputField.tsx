import "./InputStyles.css";
import { useRef } from "react";

/* 
Si paso props del componente padre al hijo, debo definir que tipo de dato es
Se crea una interfaz porque hay que defeinir el tipo de dato que es  cada uno 
(todo es un string pero el setTodo es una fucnión ).

En un principio he resuelto esto sin pasar props del componente padre, pero
pensándolo mejor, quiero poder utilizarlas en todos los hijos del componente
padre, por eso es mejor crear el useState en el padre y tener acceso a ello en otros.

Se podría hacer con un contexto???

*/

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}


const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(todo)
  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
        setTodo("")
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        onChange={(e) => {
            setTodo(e.target.value)
        }}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
