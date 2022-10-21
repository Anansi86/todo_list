
function AccordionBodyDone(props) {

    return(
  <>
    <div className = "accordion-body">
      <div className = "row">
        <div className = "col">
          <button className="btn btn-outline-secondary" type="button" id="button-addon1">edit</button> 
          <p>{props.done.noteText}</p>
        </div>
        <div className = "col">
          <button className="btn btn-outline-secondary" type="button" id="button-addon1">delete</button> 
        </div>
      </div>
    </div>
  </>
   )
}

export default AccordionBodyDone;