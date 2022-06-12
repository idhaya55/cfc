import axios from 'axios';
import { useState } from 'react';

function OngoingChild(params) {

    const [project, setProject] = useState(params.obj);
    const [formObject, setFormObject] = useState({comment:'',rating:0})
    function handleClick(){
        setProject(project)
      }


      function proposalClicked(e){
          console.log(project,'project',params)
        let headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        
        }
          axios.put(`https://cfc-restapi.herokuapp.com/freelancer_finish_work/${project.proposal_details['_id']}/${formObject.comment || 'Comments  not  Entered'}/${formObject.rating}`, {
          headers: headers
        }).then((response) => {
          setFormObject(formObject);
          params.proposalClick('completed')
        },(err)=> {
           console.log(err)
        })
    }

    if(Object.keys(params.obj).length > 0){
    return (
<div className="row justify-content-center " onClick={e => handleClick}>
<div className="col-md-10 ">
    <div className="card mb-4  box " >
        <div className="card-body ">
            <h5 className="card-title cfcprimary">{project.heading}</h5>
            <p className="card-text ">{project.desc}</p>
            <div className="row">
              <div className="col-md-6">
                  <h6 className="card-title cfcprimary" > Described amount : <span className="fw-bold text-dark">{project.cost}</span></h6>
              </div>
              <div className="col-md-6"> 
                  <h6 className="card-title cfcprimary" > Bid amount : <span className="fw-bold text-dark">{project.bid}</span> </h6>  
              </div>
              <div className="col-md-3  d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-outline-danger rounded-pill " onClick={e => proposalClicked(e)} >Complete Work</button>
              </div>
            </div>   
        </div>
    </div>
</div>
</div>
    )
    }
}
export default OngoingChild;