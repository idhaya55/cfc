import axios from 'axios';
import { useState } from 'react';

function ClientAppliedChild(params) {
    const [project, setProject] = useState(params.obj)
    let obj = params.obj;

    function proposalClicked(){
        let headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        
        }
          axios.get(`https://cfc-restapi.herokuapp.com/get_work_proposal/${params.obj.work_id}`, {
          headers: headers
        }).then((response) => {
          if(response.data.length > 0){
            let obj = {data:response.data,heading:project.heading}
            params.proposalClick(obj);
          }
          else{
            alert("No Proposal Made");
          }
        //   let arrayObj = [];
        //   if(response.data.length > 0){
        //     arrayObj = response.data.map(function(reap) {
        //       let  obj = { heading:reap.title,desc:reap.long_description,cost:reap.amount,bid:'',status:'Ongoing'}
        //       return obj
        //   })
        //     setProject(arrayObj);
        //     console.log(arrayObj,'arr')
        // }
        // else{
    
        // }
        },(err)=> {
           console.log(err)
        })
    }


    function handleClick(){
        setProject(obj)
       
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
                              <h6 className="card-title cfcprimary" > Described amount : {project.cost}<span className="fw-bold text-dark"></span></h6>
                          </div>
                          <div className="col-md-6"> 
                              <h6 className="card-title cfcprimary" > Bid amount :{project.bid} <span className="fw-bold text-dark"></span> </h6>  
                          </div>
                        </div>    
                    </div>
                      <div className="col-md-3  d-flex justify-content-between align-items-center">
                      <button type="button" className="btn btn-outline-danger rounded-pill " onClick={e =>  proposalClicked(e)}>Proposal List</button>
                          {/* <h6 className="card-title cfcprimary" > proposal List <span className="fw-bold text-dark"></span></h6> */}
                      </div>
                  </div>
                </div>
              </div>
    )
    }
}
export default ClientAppliedChild;