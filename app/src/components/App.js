import { useState, useEffect } from 'react';
import Input from "./Input"
import Accordion from "./AccordionProgress"
import AccordionDone from "./AccordionDone"
import ControlBoard from "./ControlBoard"


//const [data, setData] = useState([]);


function App() {

return (
    <>
    <h1>To-do Voo-do</h1>
    <div className= "container">
        <Input />
        <Accordion />
        <AccordionDone />
        <ControlBoard />
    </div>

</>
)
}

export default App
