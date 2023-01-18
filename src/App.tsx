import React from 'react';
import './App.css';

const name:string = "Marta"
const age:number = 12
const isStudent:boolean = false
let hobbies:string[] = ["read", "dance"]
let role:[number, string] //puede tener distintos tipos de datos

//para que una variable admita dos tipos de datos
let ageMarta: number | string

type Person = {
  name: string,
  age: number // si quiero que sea opcional pongo age?
}

const person: Person = {
  name:"Marta",
  age: 24
}

/*
MANERAS DE DEFINIR UNA FUNCIÓN EN TS

function printName_1(name: string) {
  console.log("Hola ", name)
}

const printName_2 = (name: string): string => {
  return `Hi ${name}`;
}

let printName_3: (name: string) => number;

let myName = (name:string): string => `Hi ${name}`

*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
