

import { useState } from 'react';
import './AllJobs.css'
function AllJobsChild(params) {
        const [project, setProject] = useState(params.obj)
        let obj = params.obj;

        function jobHandler(value) {
            params.setTemplate(value)
        }
        function handleClick(){
            setProject(obj);  
          }
        if(Object.keys(params.obj).length > 0){
        return (
        <div className="card border-secondary mb-3 eventcard padding-less" onClick={handleClick}>
                <h5 className="card-header">{project.title}</h5>
                <div className="card-body">
                    <h5 className="card-title">{project.desc}</h5>
                    <p className="card-text">{project.desc_long}</p>
                        <p>Budget {project.payment} <span className='all-right'><i className="fas fa-map-marker-alt right-div"></i>{project.location}</span></p>
                        
                    <button type="button" className="btn btn-danger rounded-pill" onClick={e => jobHandler('view')}>view job</button>
                    <button type="button" className="btn btn-danger rounded-pill right-div"onClick={ e=> jobHandler('bid')}>Bid job</button>

                </div>
            </div>
    )
        }
    
}

export default AllJobsChild;