import './Ongoing.css';
import './App.css';
import './styles.css';
import OngoingChild from './OngoingChild';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import ClientOngoingChild from './ClientOngoingChild';
import Completed from './Completed';

function Ongoing(params) {
  const type = params.type;
    let object = []
    const [project, setProject] = useState([]);
    const [user, setUser]= useState({});
  
    function handleClick(){
      setProject(object)
    }
  



    const fetchBusinesses = useCallback(() => {
      if(type === 'freelancer'){
        let headers = {
          'accept': 'application/json',
          'Content-Type': 'application/json',
      
      }
        axios.get(`https://cfc-restapi.herokuapp.com/get_ongoing_work/${user['_id']}`, {
        headers: headers
      }).then((response) => {
        let arrayObj =[];
        if(response.data.length > 0){
          arrayObj = response.data.map(function(reap) {
            let  obj = { heading:reap.title,desc:reap.long_description,cost:reap.amount,bid:reap['proposal_details'].bid_amount,status:'Ongoing', work_id:reap['_id'], proposal_details: reap['proposal_details']}
            return obj
        })
        console.log(arrayObj)
        let filterWork = arrayObj.filter((res) => !user['finished_proposal'].includes(res['work_id']));
          setProject(filterWork);
          console.log(filterWork,"ork']" )
      }
      else{
  
      }
      })
     
  }
  else{
    let headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
  
  }
    axios.get(`https://cfc-restapi.herokuapp.com/get_client_ongoing_work/${user['_id']}`, {
    headers: headers
  }).then((response) => {
    let arrayObj =[];
    if(response.data.length > 0){
      arrayObj = response.data.map(function(reap) {
        let  obj = { heading:reap.title,desc:reap.long_description,cost:reap.amount,bid:reap['proposal_details'].bid_amount,status:'Ongoing', work_id:reap['_id'], proposal_details: reap['proposal_details']}
        return obj
    })
    
    let filterWork = arrayObj.filter((res) => !user['finished_work'].includes(res['work_id']));
      setProject(filterWork);
      console.log(filterWork,"ork']" )
  }
  else{

  }
  })
  }
    },[ type, user])


    const getUser = useCallback(() => {

      const headers = {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        }  

        if(type === 'freelancer'){
      axios.get(`https://cfc-restapi.herokuapp.com/get_freelancer_by_mail_id/${params.mail}`, {
          headers: headers
        }).then((response) => {
          console.log(response)
          setUser(response.data);
          fetchBusinesses();
        },(err)=> {
           console.log(err)
        })
      }
      else{
        axios.get(`https://cfc-restapi.herokuapp.com/get_client_by_mail_id/${params.mail}`, {
          headers: headers
        }).then((response) => {
          setUser(response.data)
          fetchBusinesses();
        },(err)=> {
           console.log(err)
        })
      }
    },[params.mail, fetchBusinesses, type])

    // useEffect(() => {
     
    // }, []);
  
    useEffect(() => {
      getUser();
    }, [getUser]);


    function proposal(e){
      params.changeValue(<Completed obj={e.data} heading={e.heading}/>)
    }


    if(project.length > 0){
    return (
        <div className='applied-wrapper' onClick={e => handleClick}>
       <h4 className=" text-center cfcprimary"> My Status </h4>
      <h4 className=" text-center cfcprimary"> Ongoing Projects </h4>
          <div className=" container" > 
           

          {
                project.map(function useCallback(object, i){
                  if(type === 'freelancer'){
                    return <OngoingChild obj={object} proposalClick={e => proposal(e)} />;
                  }
                  else{
                    return <ClientOngoingChild obj={object}  proposalClick={e => proposal(e)}/>;
                      
                      // props.setValue(<ClientAppliedChild  mail={props.email} type={type}/>)
          //{ heading:'Looking for beautiful female models',desc:'Looking for beautiful female models that can provide photos and videos for social media and online platforms.',cost:'₹2000 per hour',bid:'₹1500 per hour',status:'Pending'}
                  }
                
                },[project])
              }
            </div>
     
   </div>
        );
            }
            else{
                return(
                    <div className='applied-wrapper'>
                      <h1 className=" text-center cfcprimary">Currently You don't have Ongoing Projects</h1>
                    </div>
                  )
            }
}
  
  export default Ongoing;