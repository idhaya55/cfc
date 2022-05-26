import './applied.css';
import { useState } from 'react';
import './styles.css';

function Bid(props) {
  const [project, setProject] = useState({cover_letter:'',duration:'',amount:'' });

  function handleClick(){
    setProject(project)
   
  }

  function setTemplate(value){
    if(value === 'submit'){
        if(project.cover_letter && project.duration && project.amount){
        props.setBid('back')
        }
    }
    else{
        props.setBid('back')
    }
  }
    return (
        <div className='applied-wrapper bid-fonnt' onClick={e => handleClick}>
          <h2 className="text-center cfcprimary">Bid job</h2>
            <div className=" container justify-content-center bid-widther" >     
                    <div className="card  border-dark mt-3 rounded  p-5 bid-rounded space-wrapper" >
                        <div className="row justify-content-evenly">
                          <form>
                            <h2 className="text-center cfcprimary">Youtube Video Creator/Content Manager</h2>
                             <div className="form-outline mb-4">
                              <label className="form-label cfcprimary" for="form6Example7">Cover Letter</label> 

                              <textarea className="form-control area" id="form6Example7" rows="4" value={project.cover_letter} onChange={(e) => {setProject({ cover_letter:e.target.value, duration: project.duration, amount: project.amount})}}></textarea>
                              
                            </div>
                            <div className="row mb-4">
                              <div className="col">
                                <div className="form-outline">
                                  <label className="form-label cfcprimary" for="form6Example1">Duration</label>
                                  <input type="text" id="form6Example1" className="form-control area" value={project.duration} onChange={(e) => {setProject({ cover_letter:project.cover_letter, duration: e.target.value, amount: project.amount})}}/>
                                  
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-outline">
                                  
                                    
                                  <label className="form-label cfcprimary" for="form6Example2">Amount</label>
                                  <input type="text" id="form6Example1" className="form-control area"value={project.amount} onChange={(e) => {setProject({ cover_letter:project.cover_letter, duration: project.duration, amount: e.target.value})}} />
                                </div>
                              </div>
                            </div>
                          
                            
                          
                           
                            
                        
                              </form>
                            
                            
                            
                        </div><br/>
                            <div className="text-center">
                                    <button type="button" className="btn btn-outline-danger rounded-pill" onClick={e => setTemplate('submit')}>Submit proposal</button>
                                    <button type="button" className="btn btn-outline-danger rounded-pill" onClick={e => setTemplate('cancel')}>cancel </button>
                            </div>
                    </div>
        </div> 
  
        <br/><br/>
   </div>
        )
      
      }
  
  export default Bid;