import { useState } from 'react';

function OngoingChild(params) {
    console.log(params.obj)
    const [project, setProject] = useState(params.obj)
    let obj = params.obj;
    function handleClick(){
        console.log(project)
        setProject(obj)
       
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
            </div>   
        </div>
    </div>
</div>
</div>
    )
    }
}
export default OngoingChild;