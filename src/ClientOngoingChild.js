import axios from 'axios';
import { useState } from 'react';

function ClientOngoingChild(params) {
    const [project, setProject] = useState(params.obj);
    const [formObject, setformObject] = useState({comment:'',rating:0});
    
    
   
    let obj = params.obj;

    function proposalClicked(e){
        console.log(project,'project')
        let headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        
        }
          axios.put(`https://cfc-restapi.herokuapp.com/client_finish_work/${project.proposal_details['_id']}/${formObject.comment || 'Not Entered Yet'}/${formObject.rating}`, {
          headers: headers
        }).then((response) => {
          params.proposalClick('completed')
          
        },(err)=> {
           console.log(err)
        })
    }


    function handleClick(){
        setProject(obj);
        setformObject(formObject)
       
      }
    if(Object.keys(params.obj).length > 0){
    return (
        <div className="card mb-4 box " onClick={e => handleClick}>
                <div className="card-body ">
                  <div className="row ">
                    <div className="col-md-9">
                      <h5 className="card-title cfcprimary">{project.heading}</h5>
                      <p className="card-text ">{project.desc}</p>
                      <div className="row">
                          <div className="col-md-6">
                              <h6 className="card-title cfcprimary" > Described amount :{project.cost}<span className="fw-bold text-dark"></span></h6>
                          </div>
                          <div className="col-md-6"> 
                              <h6 className="card-title cfcprimary" > Bid amount :{project.bid} <span className="fw-bold text-dark"></span> </h6>  
                          </div>
                        </div>    
                    </div>
                      <div className="col-md-3  d-flex justify-content-between align-items-center">
                      <button type="button" className="btn btn-outline-danger rounded-pill " onClick={e => proposalClicked(e)} >Complete Work</button>
                     
                      </div>
                  </div>
                </div>
              </div>
    )
    }
}
export default ClientOngoingChild;