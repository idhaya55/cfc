import axios from 'axios';
import  { useState } from 'react';
import './styles.css';
function Register(props) {
  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',

  }  
  let [value, setValue] = useState({name:'',email:'',password:'', password_2:'',number:'',type:''}); 
  function signUp(event){
    console.log(event,value)
    if(value.name && value.email && value.password){
    if(value.password === value.password_2){
      let obj = {
        "username": value.name,
        "mail_id": value.email,
        "password": value.password,
        "mobile": Number(value.number),
        "user_type": value.type,
        "account_creation_type": 'Client'
      }
    axios.post('https://cfc-restapi.herokuapp.com/register',obj, {
      headers: headers
    }).then((response) => {
      console.log(response)
      props.setmail(value.email)
    },(err)=> {

    })
  }
  else{
    console.log('Enter correct password')
  }
}
else{
  console.log('Try Again')
}
  }
    return(
<div className="tab-pane active"  >
  
                        <form className=" rounded shadow-5-strong p-5 border-success" id="signupform" action="#">
           
                          <div className="form-outline mb-4">
                          <label className="form-label cfcprimary">Name</label>
                          <input type="text" id="name" className="form-control rounded-form" placeholder="Enter your Name here" value={value.name} onChange={(e) => {setValue({name:e.target.value, email:value.password, password: value.password, password_2: value.number, number: value.number, type: value.type})}} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label cfcprimary">Email</label>
                          <input type="email" className="form-control rounded-form" id="mail" placeholder="Enter your Mail ID here" value={value.email} onChange={(e) => {setValue({name:value.name, email:e.target.value, password: value.password, password_2: value.password_2, number: value.number, type: value.type})}}  required/>
                        </div>
                        <div className="form-outline form-white mb-4">
                          <label className="form-label cfc  primary" htmlFor="typePasswordX">Password</label>
                          <input type="password" className="form-control rounded-form" id="pass" placeholder="Enter your Password" value={value.password} onChange={(e) => {setValue({name:value.name, email:value.email, password: e.target.value, password_2: value.password_2, number: value.number, type: value.type})}}  required/>
                        </div>
                        <div className="form-outline form-white mb-4">
                          <label className="form-label cfcprimary" htmlFor="typePasswordX">Confirm Password</label>
                          <input type="password" className="form-control rounded-form"  id="cpass" placeholder="Enter your Password Again" value={value.password_2} onChange={(e) => {setValue({name:value.name, email:value.password, password: value.password, password_2: e.target.value, number: value.number, type: value.type})}}  required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label cfcprimary">Mobile Number</label>
                          <input type="Number" id="mobile" className="form-control rounded-form" placeholder="Enter your Mobile Number here" value={value.number} onChange={(e) => {setValue({name:value.name, email:value.password, password: value.password, password_2: value.password_2, number: e.target.value, type: value.type})}}  required/>
                        </div>
                   
                        <div className="form-outline mb-4">
                        <label className="form-label cfcprimary">Type</label>
                         <select className="form-select mb-3 rounded-form" id="type" aria-label=".form-select example" defaultValue={'empty'} value={value.type} onChange={(e) => {setValue({name:value.name, email:value.password, password: value.password, password_2: value.password_2, number: value.number, type: e.target.value})}}>
                           <option value="empty">Who you are?</option>
                           <option value="freelancer">Freelancer</option>
                           <option value="client">Client</option>
                         </select>
                        </div>
                        
                   
                          <div className="text-center"><button className="btn btn-outline-danger px-5 rounded-pill loginbtn " type="submit" id="signup" onClick={(e) => signUp(e)}>Signup</button></div>
                             <br/>
                             <div className="text-center"> 
                               <p>-  OR  -</p>
                             </div>
                               
                             <div className="d-flex justify-content-center text-center">
                             <a className="btn btn-outline-danger m-1"  href="#/" id="gsignup" role="button">
                               <i className="fab fa-google"></i></a>
                                  
                             <a className="btn  btn-outline-danger m-1"  href="#/"  role="button">
                               <i className="fab fa-facebook"></i></a>
                             </div></form>
                      </div>
    )
}

export default Register;