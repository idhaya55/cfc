import './Description.css';
import './styles.css';
import { useState } from 'react';

function Description(params) {

    const [project, setProject] = useState(params.obj)
    let obj = params.obj;
   
    function handleClick(){
        console.log(project)
        setProject(obj)
       
      }
    if(Object.keys(params.obj).length > 0){
    return (
    <div className='first-wrapper' onClick={e => handleClick}>
        <div className="container justify-content-center first-wrapper-wrapper" >     
                    <div className="card  border-light mt-3 rounded  p-5 " ><br/>
                        <div className="row justify-content-evenly">
                            <div className="col-lg-5 rounded shadow-lg p-3 mb-5 p-5 ">
                                <h5 className="cfcprimary">Job Title </h5>
                                <p className="card-text">{project.title || ''}</p>
                                <h5 className="cfcprimary">Short Description </h5>
                                <p className="card-text"> {project.desc || ''}</p>
                                <h5 className="cfcprimary">Long Description </h5>
                                <p className="card-text"> {project.desc_long || ''} </p>
                                <h5 className="cfcprimary">Job Location </h5>
                                <p className="card-text">Remote / Offine (Address: Ultra city Minjur)</p>
                                <h5 className="cfcprimary">Job Type</h5>
                                <p className="card-text">{project.type || ''} </p>
                                <h5 className="cfcprimary">Skill Required</h5>
                                <p className="card-text"> {project.skill || ''}  </p>
                            </div>
                            

                            <div className="col-lg-5  rounded shadow-lg p-3 mb-5 p-5 " > 
                                <h5 className="cfcprimary">Duration</h5>
                                <p className="card-text"> {project.duration || ''} </p>
                                <h5 className="cfcprimary"> Start date </h5>
                                <p className="card-text"> {project.start_date || ''}</p>
                                <h5 className="cfcprimary"> Payment </h5>
                                <p className="card-text"> {project.payment || ''}</p>
                                <h5 className="card-text"> <b>Oraganization Details</b></h5>
                                <h5 className="cfcprimary">Organization Name</h5>
                                <p className="card-text"> {project.org_name || ''}  </p>
                                <h5 className="cfcprimary">Oraganization Mail ID</h5>
                                <p className="card-text">{project.org_mail || ''}</p>
                                <h5 className="cfcprimary"> Organization Website</h5>
                                <p className="card-text"> {project.website || ''}</p> 
                                <h5 className="cfcprimary">Attachments </h5>
                                <p className="card-text"> {project.attach || ''}</p>
                            </div>
                        </div><br/>
                            <div className="text-center">
                                    <button type="button" className="btn btn-outline-success rounded-pill">Job Verified</button>
                                    <button type="button" className="btn btn-outline-danger rounded-pill">Reject </button>
                            </div><br/>
                    </div>
        </div> 
  
    <hr/>
   
     
   </div>
        );
    }
    
    }
  
  export default Description;