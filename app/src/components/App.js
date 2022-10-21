import { useState, useEffect } from 'react';
import Input from "./Input"
import Accordion from "./AccordionProgress"
import AccordionDone from "./AccordionDone"
import ControlBoard from "./ControlBoard"



function App() {

  // un-created todo
  let [input, setInput] = useState("false");

  // in-progress todo
  let [todos, setTodos] = useState([]);
  let [clear, setClear] = useState(0);

  // done todo
  let [done, setDone] = useState([]);

  console.log (clear)
  console.log ("current data in todos array: ", todos);

  if (clear > 0) {
    for (let i = 0; i < todos.length; i++) {
      //todos[i] = element to be deleted, i = index number
      if (clear == todos[i].id) {
        todos.splice(i,1 );
      }
    }
  }

return (
    <>
    <h1>To-do Voo-do</h1>
    <div className= "container">
        <Input getInput={input} setInput={setInput} getTodos={todos} setTodos={setTodos} />
        <Accordion todos={todos} setter={setTodos} setClear={setClear} />
        <AccordionDone getter={done} setter={setTodos} />
        <ControlBoard />
    </div>

</>
)
}

export default App

