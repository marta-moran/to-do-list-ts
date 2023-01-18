import React from 'react';
import './App.css';
import HomePage from './pages/Home/HomePage';

const name:string = "Marta"
const age:number = 12
const isStudent:boolean = false
let hobbies:string[] = ["read", "dance"]
let role:[number, string] //puede tener distintos tipos de datos

//para que una variable admita dos tipos de datos
let ageMarta: number | string

//no usar any, usar unknown si no se el tipo de dato que será
let result: unknown

//void devuelve undefined y never no devuelve NADA
// let printName: (name: string) => never

type Person = {
  name: string,
  age: number // si quiero que sea opcional pongo age?
}

// objeto normal
const person: Person = {
  name:"Marta",
  age: 24
}

// interface
interface Person_1 {
  name: string,
  age?: number
}

// puedo extender una interfaz a otra interfaz
interface Guy extends Person_1 {
  profession: String
}

// puedo extender una interfaz a un tipo
type X = Person_1 & {
  a: string
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

const App: React.FC = () => {
  return (
    <div className="App">
      <HomePage></HomePage>
    </div>
  );
}

export default App;
