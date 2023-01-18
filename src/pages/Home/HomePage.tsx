import { useState } from "react";
import InputField from "../../components/InputField/InputField";

function HomePage() {
  //const [todo, setTodo] = useState<string>("") //si quisera usar string o number useState<string | number>("")
  return (
    <div>
      <header className="App-header">
        <h1>Taskify</h1>
      </header>
      <InputField />
    </div>
  );
}

export default HomePage;
