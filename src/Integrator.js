
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
import ClientHome from './ClientHome';


function Integrator(){
    const [load, setLoad] = useState(false);
    const [email, setEmail] = useState('');
    const [type, setType] = useState('')
    const [inHome, setHome] = useState(false);
    const [currentPage, setCurrentPage] = useState(<Home />);



// const logginDecider = useCallback(() => {
    
// }) 


function logginHandler(e){
    if(localStorage.getItem('email')){
         setEmail(localStorage.getItem('email'))
    }
    if(localStorage.getItem('type')){
         setType(localStorage.getItem('type'))
    }
    // element = localStorage.getItem('type') ? setEmail(localStorage.getItem('email')) : '';
    if(load === false){
    if(email){
             if(type === 'freelancer'){
                 gotoJobsScreen('')
                 setHome(true)
             }
             else if(type === 'client'){
                setHome(true)
                setCurrentPage(<ClientHome email={email} setTemplate={e => templateChanger(e)} />)
             }
         }
         else{
            setCurrentPage(<Home />)
         }
        }
    }
    // useEffect(() => {
    //     console.log(localStorage.getItem('email'),  localStorage.getItem('type'))
    // function logginDecider(){
    //  if(email){
    //      if(type === 'freelancer'){
    //          gotoJobsScreen('')
    //      }
    //      else{
    //         setCurrentPage(<Home />)
    //      }
    //  }
    //  else{
    //     setCurrentPage(<Home />)
    //  }
    // }
    //     logginDecider();
    //   }, [email, type, gotoJobsScreen]);

function loginHandler(value){
    console.log('int',value,email,type)
    setLoad(true);
    if(value === 'login'){
        setCurrentPage(<Login type={'login'} setValue={e => changeEmail(e)} />);
    }
    else if(value === 'logout'){
        setHome(false);
        setEmail('');
        localStorage.setItem('email', '');
        localStorage.setItem('type', '');
        setCurrentPage(<Home /> )
    }
    else if(value === 'profile'){
        setCurrentPage(<Profile email={email} type={type}/> )
    }
    else if(value === 'status'){

        setCurrentPage(<Status email={email}  setValue={e => setTemplate2(e)} type={type}/> )
    }
    else if(value === 'update-profile'){
        setCurrentPage(<UpdateProfile email={email} type={type} setValue={e => gotoJobsScreen(e)}/>)
    }
    else if(value === 'home'){  
        if(inHome === true){
            if(type === 'freelancer'){
                setCurrentPage(<AllJobs email={email} setTemplate={e => templateChanger(e)}/> )
            }
            else{
                setCurrentPage(<ClientHome email={email} setTemplate={e => templateChanger(e)} />)
            }
        }
        else{
            setCurrentPage(<Home /> )
        }
    }
    else{
        setCurrentPage(<Login type={'signup'}  setValue={e => changeEmail(e)} />)
    }
}

function gotoJobsScreen(){
    setCurrentPage(<AllJobs email={email} setTemplate={e => templateChanger(e)} /> )
}

function changeEmail(e){
    console.log(e,e.type||type,'type')
    // localStorage.setItem('email',email);
    if(e.email){
        localStorage.setItem('email', e.email);
        setEmail(e.email);
    }
    else{
        localStorage.setItem('email', email);
        setEmail(email);
    }
    if(e.type){
      localStorage.setItem('type', e.type);
      setType(e.type)
      console.log('type i SpeechSynthesisErrorEvent', type)
    }
    else{
        localStorage.setItem('type', type);
        setType(type)
        console.log('type i SpeechSynthesisErrorEvent', type)
    }
    
    setHome(true);
    setCurrentPage(e.template)
}

function templateChanger(e){
    console.log(e,email,'email')
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

function setTemplate2(e){
    setHome(true);
    setCurrentPage(e)
}

return (
<div onLoad={e => logginHandler(e)}>
  { inHome ? <LoggedInHeader setlogin={e => loginHandler(e)}/> : <Header login={inHome} setlogin={e => loginHandler(e)}/>}
    

  {currentPage}

   {<Footer />}
</div>
);
}
export default Integrator;