import { useState } from 'react';

function AppliedChild(params) {
    const [project, setProject] = useState(params.obj)
    let obj = params.obj;
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
                          <h6 className="card-title cfcprimary" > Status : {project.status}<span className="fw-bold text-dark"></span></h6>
                      </div>
                  </div>
                </div>
              </div>
    )
    }
}
export default AppliedChild;