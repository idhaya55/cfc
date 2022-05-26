
import './Login.css';
import './App.css';
import './styles.css';
import React, { useState } from 'react';
import Register from './Register';
import LoginChild from './LoginChild';

import AllJobs from './AllJobs';


// function toggle(value){
//   // template = value
// }



// function trigger() {
//   console.log('triggered')
// }

function Login(props) {
  let obj = <LoginChild setmail={e => goBack(e)}/>;
  if(props.type === 'login'){
      obj = <LoginChild setmail={e => goBack(e)}/>
  }
  else{
      obj = <Register setmail={e => goBack(e)}/>
  }
  let str = ''
  let [mail, setEmail] = useState(str);
  let [login, setLogin] = useState(false);
  let [template, setTemplate] = useState(obj);
  
  function templateChanger(e){
    if(e === 'back'){
      props.setValue({template:<AllJobs email={e} setTemplate={e => templateChanger(e)}/>, email:mail})
    }
    else{
      props.setValue({template:e,email:mail})
    }
    // props.setValue(<AllJobs setValue={e => templateChanger}/>)
  }
  function goBack(emailValue){
    setEmail(emailValue)
    mail = emailValue;
    console.log(login,emailValue,mail)
    
    setLogin(true);
    props.setValue({template:<AllJobs email={emailValue} setTemplate={e => templateChanger(e)}/>, email:mail})
  }
  // template = {
  //   current: <LoginChild /> 
  // };
  // function teplateViewer(){
  //   console.log(template,'handle')
    
  // }

  function handleClick(params) {
    if(params === 'login') {
      setTemplate( <LoginChild setmail={e => goBack(e)}/> );
     }
      else{
        setTemplate(<Register setmail={e => goBack(e)}/>);
      }
    
    // template = params;
    
  }
    return (
      <div>
    <div  className="bg-image shadow-2-strong intro" >
                <div className="mask d-flex align-items-center" >
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-5 col-md-8 loggin-wrapper crdlg"  >
                        
                        <ul className="nav nav-pills nav-justified mb-2 pills-tab tablist"   >
                          <li className="nav-item" role="presentation">
                            <button className="btn btn-outline-danger px-5 rounded-pill loginbtn pills-login-tab nav-button-wrapper"   type="button" role="tab"  onClick={e => handleClick('login')} >Login</button>
                          </li>&nbsp;&nbsp;&nbsp;&nbsp;
                          <li className="nav-item" role="presentation">
                            <button className="btn btn-outline-danger px-5 rounded-pill loginbtn pills-signup-tab nav-button-wrapper"  type="button" role="tab" onClick={e => handleClick('signup')}>Sign Up</button>
                          </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                        
                        {template}                        
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
     </div>
    )

//   else{
//   return (
//   <div>
    

// <div  className="bg-image shadow-2-strong intro" >
//             <div className="mask d-flex align-items-center" >
//               <div className="container">
//                 <div className="row justify-content-center">
//                   <div className="col-xl-5 col-md-8 loggin-wrapper crdlg"  >
                    
//                     <ul className="nav nav-pills nav-justified mb-2 pills-tab tablist"   >
//                       <li className="nav-item" role="presentation">
//                         <button className="btn btn-outline-danger px-5 rounded-pill loginbtn pills-login-tab nav-button-wrapper"  data-bs-toggle="pill" data-bs-target="#pills-login" type="button" role="tab" aria-controls="pills-login" aria-selected="true" onclick="toggle('login')">Login</button>
//                       </li>&nbsp;&nbsp;&nbsp;&nbsp;
//                       <li className="nav-item" role="presentation">
//                         <button className="btn btn-outline-danger px-5 rounded-pill loginbtn pills-signup-tab nav-button-wrapper"  data-bs-toggle="pill" data-bs-target="#pills-signup" type="button" role="tab" aria-controls="pills-signup" aria-selected="false" onclick="toggle('sign-up')">Signup</button>
//                       </li>
//                     </ul>
//                     <div className="tab-content" id="pills-tabContent">
//                       {/* <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
//                         <form className=" rounded shadow-5-strong p-5 border-success" id="loginform" action="#">

//                          <div className="form-outline mb-4">
//                            <label className="form-label cfcprimary">Email</label>
//                            <input type="email" className="form-control rounded-form" id="usermail" placeholder="Enter your Mail ID here"  required/>
//                          </div>
//                          <div className="form-outline  mb-4">
//                            <label className="form-label cfcprimary" for="typePasswordX">Password</label>
//                            <input type="password" className="form-control rounded-form" id="userpass" placeholder="Enter your Password"  required/>
//                          </div>
//                          <div className="text-end"><p className="small pb-lg-2"><a className="text-dark-50" >Forgot password?</a></p></div>
                   
//                            <div className="text-center"><button className="btn btn-outline-danger px-5 rounded-pill loginbtn " type="submit" id="login">Login</button></div>
//                              <br/>
//                              <div className="text-center"> 
//                                <p>-  OR  -</p>
//                              </div>
                               
//                              <div className="d-flex justify-content-center text-center">
                                 
     
//                                <a className="btn btn-outline-danger m-1" id="glogin"  role="button">
//                                  <i className="fab fa-google"></i></a>
                                    
//                                <a className="btn  btn-outline-danger m-1" scope="public_profile,email" onclick="fb_login()" role="button">
//                                  <i className="fab fa-facebook"></i></a>
//                              </div>
//                              </form>
//                       </div> */}

                      

//                     </div>
                    
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//  </div>
  
//       );
//   }
}

export default Login;