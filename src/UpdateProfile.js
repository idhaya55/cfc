import Home from './Home';
import { useState, useEffect, useCallback } from 'react';
import './styles.css';
import axios from 'axios';
function UpdateProfile(params) {
  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',

  } 
    let [value, setValue] = useState({}); 

    function goBack(e){
      console.log(value,'val')
       if(e === 'save'){
        if(params.type === 'freelancer'){
          // /{client_id}/idhaya2/1234567891/fhggfdfb/12-02-1999/xffvb/xdv/gn?freelancer_id=10824184-5b53-40a6-945c-9a4f2b47e612
         
        axios.put(`https://cfc-restapi.herokuapp.com/update_freelancer_profile/client_id/${value.name}/${value.phone_number}/${value.location || 'not'}/${value.dob || 'not'}/${value.charges || 'not'}/${value.skills || 'not'}/gn?freelancer_id=${value.client_id}`, {
          headers: headers
        }).then((response) => {
          params.setValue(<Home />)
          // if(response){
            
          //     setValue({mail_id:response.data['mail_id'],client_id:response.data['_id'],name:response.data['username'],phone_number:response.data['mobile'],email:response.data['mail_id'],dob:response.data['dob'],skills:response.data['skills'] || '',charges:response.data['rate'] || '',location:response.data['location'] || '',profile:response.data['profile_picture']})

          // }
          
          // 
        },(err)=> {
           console.log(err)
        })
        
      }
      else{
        axios.put(`https://cfc-restapi.herokuapp.com/update_client_profile/${value.client_id}/${value.name}/${value.phone_number}/${value.location || 'not'}/${value.dob || 'not'}/${value.charges || 'not'}/${value.skills || 'not'}`, {
          headers: headers
        }).then((response) => {
          params.setValue(<Home />)
          // if(response){
            
          //     setValue({mail_id:response.data['mail_id'],client_id:response.data['_id'],name:response.data['username'],phone_number:response.data['mobile'],email:response.data['mail_id'],dob:response.data['dob'],skills:response.data['skills'] || '',charges:response.data['rate'] || '',location:response.data['location'] || '',profile:response.data['profile_picture']})

          // }
          
          // 
        },(err)=> {
           console.log(err)
        })
      }

        
       }
       else{
        params.setValue(<Home />)
       }
       
        
    }
    function handleClick(e){
        setValue(value)
    }

    const fetchBusinesses = useCallback(() => {
    const headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
  
    } 
      if(params.type === 'freelancer'){
      axios.get(`https://cfc-restapi.herokuapp.com/get_freelancer_by_mail_id/${params.email}`, {
          headers: headers
        }).then((response) => {
          if(response){
              setValue({mail_id:response.data['mail_id'],client_id:response.data['_id'],name:response.data['username'],phone_number:response.data['mobile'],email:response.data['mail_id'],dob:response.data['dob'],skills:response.data['skills'] || '',charges:response.data['description'] || '',location:response.data['address'] || '',profile:response.data['profile_picture']})
          }
          
          // 
        },(err)=> {
           console.log(err)
        })
      }
      else{
        axios.get(`https://cfc-restapi.herokuapp.com/get_client_by_mail_id/${params.email}`, {
          headers: headers
        }).then((response) => {
          if(response){
              setValue({mail_id:response.data['mail_id'],client_id:response.data['_id'],name:response.data['username'],phone_number:response.data['mobile'],email:response.data['mail_id'],dob:response.data['dob'],skills:response.data['skills'] || '',charges:response.data['description'] || '',location:response.data['address'] || '',profile:response.data['profile_picture']})
          }
          
          // 
        },(err)=> {
           console.log(err)
        })
      }
    },[params])
  
    useEffect(() => {
      fetchBusinesses();
    }, [fetchBusinesses]);

    
    // useEffect(() => {
      
    // }, [])
    return(
        <div>
        <h2 className="text-center cfcprimary" onClick={e => handleClick(e)}>Update your profile</h2><br/>
       <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-lg-4">
            <div className="card border-dark mb-3">  
                <div className="card_img">
                    <img src="user.png" alt="user-profile"/>
                </div><br/>
                <div className="text-center">
                    
                  <a href="#/" className="card-link " ><img src={value.profile}  alt="Loading..." width="30px" height="30px"/>Edit profile photo</a>
                </div>
            </div>
            <div className="card border-dark mb-3"> 
                
              <div className="card_info">
                  <h2 className='centered-align'>{ params.type === 'freelancer' ? 'Update your skills' : 'Expected Skills' }</h2>
                  
                  <div className="form-group update-wrapper" > 
                    <label for="exampleFormControlTextarea1"></label> 
                    <input type="text" className="form-control semi-rounded" id="exampleFormControlTextarea1"  value={value.skills  === 'not' ? '' : value.skills }  onChange={(e) => setValue({mail_id:value.mail_id,client_id:value.client_id,name:value.name,email:value.email,phone_number:value.phone_number, dob:value.dob,location:value.location,charges:value.charges,skills:e.target.value,profile:value.profile})}/></div>
                    <br/>
                    <button className="btn btn-outline-danger btn-md me-md-4 rounded-pill right-div" type="button" onClick={e => setValue({mail_id:value.mail_id,client_id:value.client_id,name:value.name,email:value.email,phone_number:value.phone_number, dob:value.dob,location:value.location,charges:value.charges,skills:'',profile:value.profile})}><b>Clear</b></button>
                  
              </div>
          </div>
              

          </div>
          
          <div className="col-lg-5">
            <div className="card border-dark mb-5">
              <form className=" rounded shadow-5-strong p-5 border-success">
                     <div className="form-outline mb-4">
                         <label className="form-label" >Name</label>   
                           <input type="Name" id="typeName" className="form-control form-control-lg bid-rounded"   value={value.name}  onChange={(e) => setValue({mail_id:value.mail_id,client_id:value.client_id,name:e.target.value,email:value.email,phone_number:value.phone_number, dob:value.dob,location:value.location,charges:value.charges,skills:value.skills,profile:value.profile})} />
                     </div>
       
                     <div className="form-outline form-white mb-4">
                         <label className="form-label" for="typeEmailX">Email</label>
                       <input type="Email" id="typeEmailX" className="form-control form-control-lg bid-rounded"  value={value.email}  onChange={(e) => setValue({mail_id:value.mail_id,client_id:value.client_id,name:value.name,email:e.target.value,phone_number:value.phone_number, dob:value.dob,location:value.location,charges:value.charges,skills:value.skills,profile:value.profile})}/>
                     </div>
                     <div className="form-outline form-white mb-4">
                      <label className="form-label" for="typePhone NumberX">Phone Number</label>
                    <input type="Phone Number" id="typePhone NumberX" className="form-control form-control-lg bid-rounded"  value={value.phone_number}  onChange={(e) => setValue({mail_id:value.mail_id,client_id:value.client_id,name:value.name,email:value.email,phone_number:e.target.value, dob:value.dob,location:value.location,charges:value.charges,skills:value.skills,profile:value.profile})}/>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <label className="form-label" for="typeDOBX">DOB</label>
                 
                  <input type="date"  className="form-control cfcprimary bid-rounded" required  value={value.dob === 'not' ? '' : value.dob}  onChange={(e) => setValue({mail_id:value.mail_id,client_id:value.client_id,name:value.name,email:value.email,phone_number:value.phone_number, dob:e.target.value,location:value.location,charges:value.charges,skills:value.skills,profile:value.profile})}/>
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label" for="typeArea/LocationX">Area/Location</label>
                <input type="Area/Location" id="typeArea/LocationX" className="form-control form-control-lg bid-rounded"   value={value.location === 'not' ? '' : value.location}  onChange={(e) => setValue({mail_id:value.mail_id,client_id:value.client_id,name:value.name,email:value.email,phone_number:value.phone_number, dob:value.dob,location:e.target.value,charges:value.charges,skills:value.skills,profile:value.profile})}/>
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label" for="typeCharges/hourX">Charges per hour</label>
                <input type="Charges/hour" id="typeCharges/hourX" className="form-control form-control-lg bid-rounded"   value={value.charges  === 'not' ? '' : value.charges}  onChange={(e) => setValue({mail_id:value.mail_id,client_id:value.client_id,name:value.name,email:value.email,phone_number:value.phone_number, dob:value.dob,location:value.location,charges:e.target.value,skills:value.skills,profile:value.profile})}/>
              </div>
                     </form>
            </div>
          
        </div>
          <div className="col-lg-3">
            <div className="card border-dark mb-3">  
                  
              <div className="card_info"> 
                 <p className='centered-align'>Are you done?</p> 
                 <div className="text-center">
                 <button className="btn btn-outline-danger  rounded-pill" type="button" onClick={e => goBack('save')}><b>Save changes</b></button><br/><br/>
                 <button className="btn btn-outline-danger  rounded-pill" type="button" onClick={e => goBack()}><b>Cancel</b></button>
                 </div>
                 
    
              </div>
          </div>
               
          </div>
          
        </div>
      </div> 
      <br/><br/><br/>
      </div>
    )
}

export default UpdateProfile;