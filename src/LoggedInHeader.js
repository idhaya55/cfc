

// import { DropdownButton } from "react-bootstrap";

import { useState } from "react";



function LoggedInHeader(params) {
  let [currentSelect, setCurrentSelect] = useState('login')
  // const [value, setValue]= useState('My Profile')
  // function handleChange(e){
  //   console.log(e,value)
           
  //          if(e === 'view'){
  //           params.setlogin('profile')
  //           setValue('View Profile')
  //          }
  //          else{
  //           params.setlogin('update-profile')
  //           setValue('Update Profile')
  //          }
  // }

  function handleClick(e){
    if(e === 'home'){
      params.setlogin('home');
      setCurrentSelect('home')
    }
    else if(e === 'status'){
      setCurrentSelect('status')
      params.setlogin('status')
    }
    else if(e === 'profile'){
      setCurrentSelect('profile')
      params.setlogin('profile')
    }
    else if (e === 'contact'){
      setCurrentSelect('contact')
      params.setlogin('home')
    }
    else{
      setCurrentSelect('update')
      params.setlogin('update-profile')
    }
    
  }
    return(
        <div>
        <header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow p-3 mb-5 rounded">
            <div className="container">

                <a href="#/" className="navbar-brand" onClick={e => handleClick('home')}>Chennai Freelancers Club</a>
    
        
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button><br/>
    
                <div className="collapse navbar-collapse  text-dark" id="navbarNavDropdown">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 align-items-center" >
                    <li className="nav-item">
                        <a className="nav-link" style={currentSelect === 'home' ? { color: '#FF4646',fontWeight: 'bold',borderBottom: '3px #FF4646 solid'}: {}}  href="#/" onClick={e => handleClick('home')} >Home</a>
                    </li>
                    <li className="nav-item">
                      <a href="#/" className="nav-link " style={currentSelect === 'status' ? { color: '#FF4646',fontWeight: 'bold',borderBottom: '3px #FF4646 solid'}: {}} onClick={e => handleClick('status')}>My Status</a>
                    </li>
                    <li className="nav-item">
                      <a href="#/" className="nav-link" style={currentSelect === 'profile' ? { color: '#FF4646',fontWeight: 'bold',borderBottom: '3px #FF4646 solid'}: {}} onClick={e => handleClick('profile')}>Profile</a>
                    </li>
                    <li className="nav-item">
                      <a href="#/" className="nav-link" style={currentSelect === 'update' ? { color: '#FF4646',fontWeight: 'bold',borderBottom: '3px #FF4646 solid'}: {}} onClick={e => handleClick('update')}>Update Profile</a>
                    </li>
                    <li className="nav-item">
                      <a href="#/" className="nav-link" style={currentSelect === 'update' ? { color: '#FF4646',fontWeight: 'bold',borderBottom: '3px #FF4646 solid'}: {}} onClick={e => handleClick('chat')}>Chat</a>
                    </li>
                    
        
        {/* <select value={value} onChange={e => handleChange(e.target.value)}>
          <option value="view">View Profile</option>
          <option value="update">Update Profile</option>
        </select> */}

                    {/* <DropdownButton title="">
      <Dropdown.Item href="#/">View Profile</Dropdown.Item>
      <Dropdown.Item href="#/">Update Profile</Dropdown.Item>
    </DropdownButton> */}
                    {/* <li className="nav-item ">
                    <div className="btn-group">
                    <li className="nav-item dropdown">
                    <a href="#/" className="nav-link cfcprimary" onClick={e => params.setlogin('status')}>My Status</a>
                    </li>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#/" onClick={e => params.setlogin('profile')}>View Profile</a>
    <a className="dropdown-item" href="#/" onClick={e => params.setlogin('update-profile')}>Update Profile</a>
  </div>
</div>
                        
                      </li> */}
                    <li className="nav-item">
                      <a href="#/" className="nav-link" style={currentSelect === 'contact' ? { color: '#FF4646',fontWeight: 'bold',borderBottom: '3px #FF4646 solid'}: {}} onClick={e => handleClick('contact')}>Contact Us</a>
                    </li>
                    <li className="nav-item">
                      <a href="#/" className="btn btn-outline-danger rounded-pill" onClick={e => params.setlogin('logout')} id="logout">Logout</a>
                    </li>
                </ul>
              </div> 
            </div>
          </nav>
          </header><br/><br/><br/><br/>
          </div>
    )
}

export default LoggedInHeader;