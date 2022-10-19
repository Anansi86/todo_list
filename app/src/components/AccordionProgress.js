import AccordionBodyProgress from "./AccordionBodyProgress"

function AccordionProgress() {
   return (
    <>
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        In Progress
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        
        <AccordionBodyProgress />

    </div>
   </div>
  </div>
 </>
 );
}

export default AccordionProgress;