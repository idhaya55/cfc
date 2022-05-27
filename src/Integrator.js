
import { useState } from 'react';
import Home from './Home';
import Login from './Login';
import Header from './Header';
import './styles.css';
import LoggedInHeader from './LoggedInHeader';
import Profile from './Profile';
import Status from './Status';
import AllJobs from './AllJobs';
import Footer from './Footer';
import UpdateProfile from './UpdateProfile';


function Integrator(){
    const [email, setEmail] = useState('')
    const [inHome, setHome] = useState(false);
    const [currentPage, setCurrentPage] = useState(<Home />);
function loginHandler(value){
   
    if(value === 'login'){
        setCurrentPage(<Login type={'login'} setValue={e => changeEmail(e)} />);
    }
    else if(value === 'logout'){
        setHome(false);
        setEmail('');
        setCurrentPage(<Home /> )
    }
    else if(value === 'profile'){
        console.log(email)
        setCurrentPage(<Profile email={email}/> )
    }
    else if(value === 'status'){
        setCurrentPage(<Status email={email} setValue={e => setTemplate(e)}/> )
    }
    else if(value === 'update-profile'){
        setCurrentPage(<UpdateProfile email={email} setValue={e => gotoJobsScreen(e)}/>)
    }
    else if(value === 'home'){
        if(inHome === true){
        setCurrentPage(<AllJobs setTemplate={e => templateChanger(e)}/> )
        }
        else{
            setCurrentPage(<Home /> )
        }
    }
    else{
        setCurrentPage(<Login type={'signup'}   setValue={e => changeEmail(e)} />)
    }
}

function gotoJobsScreen(){
    setCurrentPage(<AllJobs setTemplate={e => templateChanger(e)}/> )
}

function changeEmail(e){
    console.log(e);
    setEmail(e.email);
    setHome(true);
    setCurrentPage(e.template)
}

function templateChanger(e){
    if(e === 'back'){
        setCurrentPage(<AllJobs email={email} setTemplate={e => templateChanger(e)}/>)
    }
    else{
        setCurrentPage(e)
    }
    // props.setValue(<AllJobs setValue={e => templateChanger}/>)
  }
//   function goBack(){
//     setLogin(true);
//     console.log(login)
//     props.setValue(<AllJobs setTemplate={e => templateChanger(e)}/>)
//   }

function setTemplate(e){
    setHome(true);
    setCurrentPage(e)
}

return (
<div >
  { inHome ? <LoggedInHeader setlogin={e => loginHandler(e)}/> : <Header login={inHome} setlogin={e => loginHandler(e)}/>}
    

  {currentPage}

   {<Footer />}
</div>
);
}
export default Integrator;