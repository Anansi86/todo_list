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
  let [completed, setCompleted] = useState(0);
  

  console.log("In-progress: ", todos);
  console.log("Done: ", done);

  /*if (completed > 0) {
    for (let i = 0; i < todos.length; i++) {
      //todos[i] = element to be deleted, i = index number
      if (completed == todos[i].id) {
        setDone([todos[i], ...done]);
        todos.splice(i, 1);
      }
    }
  }*/
  
  useEffect(() => {
    let savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  if (todos.length) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  useEffect(() => {
    if (clear > 0) {
      for (let i = 0; i < todos.length; i++) {
        //todos[i] = element to be deleted, i = index number
        if (clear === todos[i].id) {
          todos.splice(i, 1);
        }
      }
    }
  }, [clear])

  useEffect(() => {
    if (completed > 0) {
      for (let i = 0; i < todos.length; i++) {
        //todos[i] = element to be deleted, i = index number
        if (completed === todos[i].id) {
          setDone((prev) => [todos[i], ...prev]);
          setTodos((prev) => prev.filter(todo => todo.id !== completed));
        }
      }
    }
  }, [completed]);

return (
    <>
    <h1>To-do Voo-do</h1>
    <div className= "container">
        <Input getInput={input} setInput={setInput} getTodos={todos} setTodos={setTodos} />
        <Accordion todos={todos} setTodos={setTodos} setClear={setClear} completed={setCompleted} />
        <AccordionDone done={done} setTodos={setTodos} completed={setCompleted}/>
        <ControlBoard />
    </div>

</>
)
}
export default App