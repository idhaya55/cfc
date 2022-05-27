import axios from 'axios';
import  { useState } from 'react';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import './styles.css'

function LoginChild(props) {
  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',

  }  
  const[mail, setemail] = useState({email:'',password:''}); 
  
  function login(event){
    if(mail.email && mail.password){
      axios.get(`https://cfc-restapi.herokuapp.com/login/${mail.email}`, {
      headers: headers
    }).then((response) => {
      if(mail.password === response.data.password){
        props.setmail(mail.email)
      }
      
      // 
    },(err)=> {
       console.log(err)
    })
    }
     
  }
    return (
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
          
                            <form className=" rounded shadow-5-strong p-5 border-success" id="loginform" action="#">
    
                             <div className="form-outline mb-4">
                               <label className="form-label cfcprimary">Email</label>
                               <input type="email" className="form-control rounded-form" id="usermail" placeholder="Enter your Mail ID here" value={mail.name} onChange={(e) => {setemail({ email:e.target.value, password: mail.password})}}  required/>
                             </div>
                             <div className="form-outline  mb-4">
                               <label className="form-label cfcprimary" htmlFor="typePasswordX">Password</label>
                               <input type="password" className="form-control rounded-form" id="userpass" placeholder="Enter your Password" value={mail.password} onChange={(e) => {setemail({ email:mail.email, password: e.target.value})}}  required/>
                             </div>
                             <div className="text-end"><p className="small pb-lg-2"><a className="text-dark-50" href="#/">Forgot password?</a></p></div>
                       
                               <div className="text-center"><button className="btn btn-outline-danger px-5 rounded-pill loginbtn " type="submit" id="login" onClick={e => login(e)}>Login</button></div>
                                 <br/>
                                 <div className="text-center"> 
                                   <p>-  OR  -</p>
                                 </div>
                                   
                                 <div className="d-flex justify-content-center text-center">
                                     
         
                                   <a className="btn btn-outline-danger m-1" id="glogin" href="#/" role="button">
                                     <FaGoogle /></a>
                                        
                                   <a className="btn  btn-outline-danger m-1" href="#/" role="button">
                                    <FaFacebook /></a>
                                 </div>
                                 </form>
                          </div>
    )
}

export default LoginChild;