import './applied.css';
import AppliedChild from './AppliedChild';
import { useState } from 'react';
import './styles.css';
function Applied() {
  let object = []
  const [project, setProject] = useState([{ heading:'Looking for beautiful female models',desc:'Looking for beautiful female models that can provide photos and videos for social media and online platforms.',cost:'₹2000 per hour',bid:'₹1500 per hour',status:'Pending'}]);

  function handleClick(){
    setProject(object)
   
  }
  if(project.length > 0){
    return (
        <div classNameName='applied-wrapper'>
        <h4 className=" text-center cfcprimary" > My Status </h4>
        <h4 className=" text-center cfcprimary" onClick={e => handleClick}> Applied Projects </h4>
            <div className=" container justify-content-center " > 
              {
                project.map(function(object, i){
                  console.log(i)
                return <AppliedChild obj={object}/>;
                })
              }
              {/* <div className="card mb-4 box">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-9">
                      <h5 className="card-title cfcprimary">Looking for beautiful female models</h5>
                      <p className="card-text ">Looking for beautiful female models that can provide photos and videos for social media and online platforms.</p>
                      <div className="row">
                          <div className="col-md-6">
                              <h6 className="card-title cfcprimary" > Described amount : <span className="fw-bold text-dark">₹2000 per hour</span></h6>
                          </div>
                          <div className="col-md-6"> 
                              <h6 className="card-title cfcprimary" > Bid amount : <span className="fw-bold text-dark">₹1500 per hour</span> </h6>  
                          </div>
                        </div>   
                    </div>
                      <div className="col-md-3  d-flex justify-content-between align-items-center">
                          <h6 className="card-title cfcprimary" > Status : <span className="fw-bold text-dark">Rejected</span></h6>
                      </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="card mb-4 box">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-9">
                      <h5 className="card-title cfcprimary">Looking for beautiful female models</h5>
                      <p className="card-text ">Looking for beautiful female models that can provide photos and videos for social media and online platforms.</p>
                      <div className="row">
                          <div className="col-md-6">
                              <h6 className="card-title cfcprimary" > Described amount : <span className="fw-bold text-dark">₹2000 per hour</span></h6>
                          </div>
                          <div className="col-md-6"> 
                              <h6 className="card-title cfcprimary" > Bid amount : <span className="fw-bold text-dark">₹1500 per hour</span> </h6>  
                          </div>
                        </div>    
                    </div>
                      <div className="col-md-3  d-flex justify-content-between align-items-center">
                          <h6 className="card-title cfcprimary" > Status : <span className="fw-bold text-dark">Rejected</span></h6>
                      </div>
                  </div>
                </div>
              </div> */}
            </div>
  
     
   </div>
        );}
        else{
          return(
            <div className='applied-wrapper'>
              <h1 className=" text-center cfcprimary">Currently You didn't applied for anything</h1>
            </div>
          )
        }
      
      }
  
  export default Applied;