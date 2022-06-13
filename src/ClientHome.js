import './applied.css';
// import { useState } from 'react';
import PostJobs from './Postjob.js';
import './styles.css';
import land2 from './land2.jpg';
function ClientHome(props) {
//   const [project, setProject] = useState({cover_letter:'',duration:'',amount:'' });

function job(e){
  props.setTemplate('job posted')
}
function postJob(e){
    props.setTemplate(<PostJobs email={props.email}  jobPosted={e => job(e)}/>)
}    
  
    return (
        <div>
            <div className="container">
        <h4 className="cfcprimary floated-left" >Welcome Dear Client</h4>
      </div>
        <div className="row justify-content-center">
        <div className="card mt-3 eventcard fourty-width" >
          <h5>Have your work done by great minds with great skills !!</h5>
          <img src={land2}  className="card-img-top" alt="..."   />
          <br />
          <div className="text-center">
              <a href="#/" role="button" className="btn btn-outline-danger rounded-pill" onClick={e => postJob(e)}><b>+ Create Job</b></a>
          </div>
        </div></div>
         <br />
         <br />
        </div>
        )
      
      }
  
  export default ClientHome;