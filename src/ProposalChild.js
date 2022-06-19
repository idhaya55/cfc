import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

function ProposalChild(params) {
    const [project, setProject] = useState(params.obj);
    const [user, setUser] = useState({})
    let obj = params.obj;
    function handleClick(){
        setProject(obj)
      }

     

       const getUser = useCallback(() => {

        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
          }  

          
        axios.get(`https://cfc-restapi.herokuapp.com/get_freelancer_by_mail_id/${project.freelancer_id}`, {
            headers: headers
          }).then((response) => {
    
            if(response){
                setUser({name:response.data['username'],number:response.data['mobile'],mail:response.data['mail_id'],dob:response.data['dob'],skills:response.data['skills'] || '',rate:response.data['rate'] || '',location:response.data['location'] || '',profile_picture:response.data['profile_picture']})
    
            }
            
            // 
          },(err)=> {
             console.log(err)
          })
      },[project.freelancer_id])

      useEffect(() => {
        getUser();
      }, [getUser]);


      function stopAcceptingProposal(){
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
          }  

          
        axios.put(`https://cfc-restapi.herokuapp.com/stop_accepting_work_proposal/${project['work_id']}`, {
            headers: headers
          }).then((response) => {
           console.log(response,'on')
          
        },(err)=> {
            console.log(err)
         })
      }

      function proposalAccepted(e){
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
          }  

          
        axios.put(`https://cfc-restapi.herokuapp.com/selected_proposal_for_work/${project['_id']}`, {
            headers: headers
          }).then((response) => {
    
            if(response){
                stopAcceptingProposal()
            }
            
            // 
          },(err)=> {
             console.log(err)
          })
      }

      
    if(Object.keys(params.obj).length > 0){
    return (
<div className="row justify-content-center " onClick={e => handleClick}>
<div className="col-md-10 ">
    <div className="card mb-4  box " >
        <div className="card-body ">
        <div className="row">
        <div className="col-md-9">
            <h5 className="card-title cfcprimary">{user.name}</h5>
            <p className="card-text ">{project.bid_description}</p>
            
            </div>
            <div className="col-md-3  d-flex justify-content-between align-items-center">
                      <button type="button" className="btn btn-outline-danger rounded-pill " onClick={e =>  proposalAccepted(e)}>Accept</button>
                      </div>
              <div className="col-md-6">
                  <h6 className="card-title cfcprimary" > Bid Duration : <span className="fw-bold text-dark">{project.bid_duration}</span></h6>
              </div>
              <div className="col-md-6"> 
                  <h6 className="card-title cfcprimary" > Bid amount : <span className="fw-bold text-dark">{project.bid_amount}</span> </h6>  
              </div>
              
              
              
            </div>   
        </div>
       
    </div>
    
    
</div>
</div>
    )
    }
}
export default ProposalChild;