
function AccordionBodyProgress(props) {

  function handlerClick() {
    props.setClear(props.todo.id);
  } 

  function handlerDoneClick() {
    props.completed(props.todo.id);
  }

  return(
    <>
      <div className = "accordion-body">
        <div className = "row">
          <div className = "col">
            <button onClick={handlerDoneClick} className="btn btn-outline-secondary" type="button" id="button-addon1">Done</button> 
            <p>{props.todo.noteText}</p>
          </div>
          <div className = "col">
            <button onClick={handlerClick} className="btn btn-outline-secondary" type="button" id="button-addon1">Delete</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default AccordionBodyProgress;