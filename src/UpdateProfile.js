import Home from './Home';
import { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';
function UpdateProfile(params) {
    let obj = {name:'',email:'',phone_number:'', dob:'',location:'',charges:'',skills:'',profile:''};
    const headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
  
    }  
    let [value, setValue] = useState(obj); 

    function goBack(){
        params.setValue(<Home />)
    }
    function handleClick(e){
        setValue(value)
    }

    useEffect(() => {
      axios.get(`https://cfc-restapi.herokuapp.com/get_freelancer_by_mail_id/${params.email}`, {
          headers: headers
        }).then((response) => {

          if(response){
              setValue({name:response.data['username'],phone_number:response.data['mobile'],email:response.data['mail_id'],dob:response.data['dob'],skills:response.data['skills'] || '',charges:response.data['rate'] || '',location:response.data['location'] || '',profile:response.data['profile_picture']})

          }
          
          // 
        },(err)=> {
           console.log(err)
        })
    })
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
                  <h2 className='centered-align'>update your skills</h2>
                  
                  <div className="form-group update-wrapper" > 
                    <label for="exampleFormControlTextarea1"></label> 
                    <input type="text" className="form-control semi-rounded" id="exampleFormControlTextarea1"  value={value.skills}  onChange={(e) => setValue({name:value.name,email:value.email,phone_number:value.phone_number, dob:value.dob,location:value.location,charges:value.charges,skills:e.target.value,profile:value.profile})}/></div>
                    <br/>
                    <button className="btn btn-outline-danger btn-md me-md-4 rounded-pill right-div" type="button" onClick={e => setValue({name:value.name,email:value.email,phone_number:value.phone_number, dob:value.dob,location:value.location,charges:value.charges,skills:'',profile:value.profile})}><b>Clear</b></button>
                  
              </div>
          </div>
              

          </div>
          
          <div className="col-lg-5">
            <div className="card border-dark mb-5">
              <form className=" rounded shadow-5-strong p-5 border-success">
                     <div className="form-outline mb-4">
                         <label className="form-label" >Name</label>   
                           <input type="Name" id="typeName" className="form-control form-control-lg bid-rounded"   value={value.name}  onChange={(e) => setValue({name:e.target.value,email:value.email,phone_number:value.phone_number, dob:value.dob,location:value.location,charges:value.charges,skills:value.skills,profile:value.profile})} />
                     </div>
       
                     <div className="form-outline form-white mb-4">
                         <label className="form-label" for="typeEmailX">Email</label>
                       <input type="Email" id="typeEmailX" className="form-control form-control-lg bid-rounded"  value={value.email}  onChange={(e) => setValue({name:value.name,email:e.target.value,phone_number:value.phone_number, dob:value.dob,location:value.location,charges:value.charges,skills:value.skills,profile:value.profile})}/>
                     </div>
                     <div className="form-outline form-white mb-4">
                      <label className="form-label" for="typePhone NumberX">Phone Number</label>
                    <input type="Phone Number" id="typePhone NumberX" className="form-control form-control-lg bid-rounded"  value={value.phone_number}  onChange={(e) => setValue({name:value.name,email:value.email,phone_number:e.target.value, dob:value.dob,location:value.location,charges:value.charges,skills:value.skills,profile:value.profile})}/>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <label className="form-label" for="typeDOBX">DOB</label>
                 
                  <input type="date"  className="form-control cfcprimary bid-rounded" required  value={value.dob}  onChange={(e) => setValue({name:value.name,email:value.email,phone_number:value.phone_number, dob:e.target.value,location:value.location,charges:value.charges,skills:value.skills,profile:value.profile})}/>
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label" for="typeArea/LocationX">Area/Location</label>
                <input type="Area/Location" id="typeArea/LocationX" className="form-control form-control-lg bid-rounded"   value={value.location}  onChange={(e) => setValue({name:value.name,email:value.email,phone_number:value.phone_number, dob:value.dob,location:e.target.value,charges:value.charges,skills:value.skills,profile:value.profile})}/>
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label" for="typeCharges/hourX">Charges per hour</label>
                <input type="Charges/hour" id="typeCharges/hourX" className="form-control form-control-lg bid-rounded"   value={value.charges}  onChange={(e) => setValue({name:value.name,email:value.email,phone_number:value.phone_number, dob:value.dob,location:value.location,charges:e.target.value,skills:value.skills,profile:value.profile})}/>
              </div>
                     </form>
            </div>
          
        </div>
          <div className="col-lg-3">
            <div className="card border-dark mb-3">  
                  
              <div className="card_info"> 
                 <p className='centered-align'>Are you done?</p> 
                 <div className="text-center">
                 <button className="btn btn-outline-danger  rounded-pill" type="button" onClick={e => goBack()}><b>Save changes</b></button><br/><br/>
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