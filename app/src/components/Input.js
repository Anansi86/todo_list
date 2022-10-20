import {useState} from "react"

function Input(props) {
  

  function handlerChange(event) {
    const value = event.target.value
    props.setInput(value)
  }

  function handlerClick() {
    props.setTodos([props.getInput, ...props.getTodos]);
  } 
  
  return(
 <div className="input-group mb-3">
  <input onChange={handlerChange} type="text" className="form-control" placeholder="Enter activity here!" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
  <button onClick={handlerClick} className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
</div>
  
 )
}
export default Input