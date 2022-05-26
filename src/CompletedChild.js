import { useState } from 'react';

function CompletedChild(params) {
    let [project, setProject] = useState(params.obj)
    console.log(project, 'use')
    let obj = params.obj;

    function handleClick(e){
        console.log(project);
        setProject(obj);
        
        // params.setTemplate(obj);
      }
   
    return (
        <div className="card mb-4 box" onClick={e => handleClick(e)}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-9">
                    <h5 className="card-title cfcprimary">{project.heading}</h5>
                    <p className="card-text ">{project.desc}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="card-title cfcprimary" > Described amount : <span className="fw-bold text-dark">{project.cost}</span></h5>
                        </div>
                        <div className="col-md-6"> 
                            <h5 className="card-title cfcprimary" > Bid amount : <span className="fw-bold text-dark">{project.bid}</span> </h5>  
                        </div>
                      </div>   
                  </div>
                  <div className="col-md-3  d-flex justify-content-between align-items-center" >
      
                      <button type="button" className="btn btn-outline-danger rounded-pill " >Add Review</button>

                  </div>
                </div>
              </div>
            </div>
    )
}
export default CompletedChild;