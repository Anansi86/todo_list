import AccordionBodyDone from "./AccordionBodyDone"

function AccordionDone(props) {
   return (
    <>
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Completed
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      
       {props.done.map(done => 
        <AccordionBodyDone done={done} completed={props.setCompleted} />
       )}

    </div>
   </div>
  </div>
 </>
 );
}

export default AccordionDone;