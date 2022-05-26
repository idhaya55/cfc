import { useState } from 'react';
import AllJobsChild from './AllJobsChild';
import Bid from './Bid';
import ViewJobs from './ViewJobs'
import './AllJobs.css'
function AllJobs(params) {

    let object = [];
  const [project, setProject] = useState([{ title:'Illustrator, Xd and Photoshop designer',desc:'Special title treatment.', desc_long:'Creating illustrator cards, then generating an animation in Xd, followed by converting it into a GIF in photoshop.', payment:'₹2000 per hour',bid:'₹1500 per hour',location:'Nugambakkam'}]);

  function handleClick(){
    setProject(object)
  }
  function templateHandler(e){
   if(e === 'bid'){
       params.setTemplate(<Bid  setBid={e => templateHandler(e)}/>);
   }
   else if(e === 'view'){
       params.setTemplate(<ViewJobs changeTemplate={e => templateHandler(e)}/>)
   }
   else if(e === 'back'){
       params.setTemplate('back')
   }
  }
  if(project.length > 0){
    return(
<div  onClick={e => handleClick}>
<h3 className='centered-align'>Jobs for You</h3>
    <h6 className='centered-align'>Browse the most relevant jobs that match your skills and the clients need</h6>
    
    {/* <!-- <div className="row" id="row1">
         <div className="col-lg-3" id="leftbar">
            <div className=" card border-primary mb-3 filtercard">
                <div className="card-body">
                    <h5 className="card-title">Technology </h5>
                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" for="inlineCheckbox1">technical</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" for="inlineCheckbox2">non-technical</label>
                    </div>
                </div>
            </div>
            <div className="card border-primary mb-3 filtercard">
                <div className="card-body">
                    <h5 className="card-title">Gender</h5>
                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label className="form-check-label" for="inlineCheckbox1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label className="form-check-label" for="inlineCheckbox2">Female</label>
                    </div>
                </div>
            </div>
            <div className="card border-primary mb-3 filtercard">
                <div className="card-body">
                    <h5 className="card-title">Amount</h5>
                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                    <div className="form-check form-check-inline">
                        <input type="range" className="form-range" min="0" max="5" id="customRange2">
                    </div>
                </div>
            </div>

        </div>  --> */}
    <div id="pons">
        <div className="col-lg-9 col-sm-12" id="rightbar">
        {
        project.map(function(object, i){
          return <AllJobsChild obj={object} key={i} setTemplate={e => templateHandler(e)}/>;
          })
    }
            {/* <div className="card border-secondary mb-3 eventcard">
                <h5 className="card-header">Illustrator, Xd and Photoshop designer</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">Creating illustrator cards, then generating an animation in Xd, followed by
                        converting it into
                        a GIF in photoshop.</p>
                        <p>Budget $100 <span style="float:right" ><i className="fas fa-map-marker-alt"></i> Nungambakkam</span></p>
                    <button type="button" className="btn btn-danger rounded-pill">view job</button>
                    <button type="button" className="btn btn-danger rounded-pill" style="float:right">Bid job</button>
                </div>
            </div> */}

            
{/* 
            <div className="card border-secondary mb-3 eventcard">
                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <p>Budget $100 <span style="float:right" ><i className="fas fa-map-marker-alt"></i> Nungambakkam</span></p>
                    <div className="left">
                        <button type="button" className="btn btn-danger rounded-pill">view job</button>
                        <button type="button" className="btn btn-danger rounded-pill" style="float:right">Bid job</button>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    </div>
    );
  }
}


export default AllJobs;