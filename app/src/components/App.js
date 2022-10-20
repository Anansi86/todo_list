import { useState, useEffect } from 'react';
import Input from "./Input"
import Accordion from "./AccordionProgress"
import AccordionDone from "./AccordionDone"
import ControlBoard from "./ControlBoard"



function App() {
    
  let [input, setInput] = useState("");
  let [todos, setTodos] = useState([]);

return (
    <>
    <h1>To-do Voo-do</h1>
    <div className= "container">
       
       
        <Input getInput={input} setInput={setInput} getTodos={todos} setTodos={setTodos} />
        <Accordion getter={todos} setter={setTodos} />
        <AccordionDone getter={todos} setter={setTodos} />
        <ControlBoard />
    </div>

</>
)
}

export default App

/*return (
  <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
  </form>
); */