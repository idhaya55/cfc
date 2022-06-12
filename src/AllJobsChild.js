

// import axios from 'axios';
import { useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import './AllJobs.css';

function AllJobsChild(params) {

        const [project, setProject] = useState(params.obj);
        let obj = params.obj;

        
        function jobHandler(identifier,value) {
            // let obj ={identifier:identifier, value:value}
            params.setTemplate(identifier, value)
        }


        function handleClick(){
            setProject(obj);  
          }
        if(Object.keys(params.obj).length > 0){
           
        return (
        <div className="card border-secondary mb-3 eventcard padding-less" onClick={handleClick}>
                <h5 className="card-header">{project.title}</h5>
                <div className="card-body">
                    <h5 className="card-title">{project.short_description}</h5>
                    <p className="card-text">{project.long_description}</p>
                        <p>Budget {project.amount} <span className='all-right'><FaMapMarkerAlt  className="fas flexed-item" /><span>{project.location || ''}</span></span></p>
                        
                    <button type="button" className="btn btn-danger rounded-pill" onClick={e => jobHandler('view',project)}>view job</button>
                    <button type="button" className="btn btn-danger rounded-pill right-div"onClick={ e=> jobHandler('bid',project)}>Bid job</button>

                </div>
            </div>
    )
        }
    
}

export default AllJobsChild;