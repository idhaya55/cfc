import './applied.css';
import { useCallback, useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

function Bid(props) {
  let incominObject = props.obj;
  const [user, setUser] = useState({});
  const [project, setProject] = useState({cover_letter:'',duration:'',amount:'' });
  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  }  

  function handleClick(){
    setProject(project)
   
  }

  const fetchBusinesses = useCallback(() => {
    const headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    }  
    console.log(typeof props.email,'rops')
    if(typeof props.email == 'string'){
    axios.get(`https://cfc-restapi.herokuapp.com/get_freelancer_by_mail_id/${props.email}`, {
        headers: headers
      }).then((response) => {
        if(response){
          console.log(response,'res')
          setUser(response.data)

        }
        // 
      },(err)=> {
         console.log(err)
      })
    }
    else{
      axios.get(`https://cfc-restapi.herokuapp.com/get_freelancer_by_mail_id/${props.email.mail}`, {
        headers: headers
      }).then((response) => {
        if(response){
          console.log(response,'res')
          setUser(response.data)
        }
        // 
      },(err)=> {
         console.log(err)
      })
    }
  },[props])

  useEffect(() => {
    fetchBusinesses();
  }, [fetchBusinesses]);


  function bidded(e){
    console.log(incominObject, user)
    let object = {
      "work_id": incominObject._id,
      "client_id": incominObject.client_id,
      "freelancer_id": user['_id'],
      "bid_amount": project.amount,
      "bid_duration": project.duration,
      "bid_description": project.cover_letter
    };
      axios.post(`https://cfc-restapi.herokuapp.com/create_proposal`, object, {
      headers: headers
    }).then((response) => {
        // props.setmail(obj)
        setTemplate('submit')
        console.log(props)
      // 
    },(err)=> {
      alert("Error Occoured Try Again in Somewtime");
       console.log(err)
    })

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
                            <h2 className="text-center cfcprimary">{incominObject['title']}</h2>
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
                                    <button type="button" className="btn btn-outline-danger rounded-pill" onClick={e => bidded()}>Submit proposal</button>
                                    <button type="button" className="btn btn-outline-danger rounded-pill" onClick={e => setTemplate('cancel')}>cancel </button>
                            </div>
                    </div>
        </div> 
  
        <br/><br/>
   </div>
        )
      
      }
  
  export default Bid;