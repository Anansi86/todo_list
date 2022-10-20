
function AccordionBodyProgress(props) {
  
    return(
  <>
    <div className = "accordion-body">
        <div className = "row">
            <div className = "col">
              <button className="btn btn-outline-secondary" type="button" id="button-addon1">Done</button> 
                <p>{props.todos}</p>
        </div>
        <div className = "col">
            <button className="btn btn-outline-secondary" type="button" id="button-addon1">Delete</button> 
          </div>
        </div>
    </div>
    </>
   )
}

export default AccordionBodyProgress