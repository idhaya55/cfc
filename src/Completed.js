import './Completed.css';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import './styles.css';
import React from 'react';
// import CompletedChild from './CompletedChild';
// import Description from './Description';
import CompletedChild from './CompletedChild';
import axios from 'axios';
function Completed(props) {
  // let object = [];

  const [project, setProject] = useState([]);
  const [user, setUser] = useState([]);
  const [feedbacks , setfeedbacks] = useState([]);

  function handleClick(){
    // props.changeValue(<Description />)
    setProject(project)
    
  }

  const getUser = useCallback(() => {

    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }  

  if(props.type === 'freelancer'){
    axios.get(`https://cfc-restapi.herokuapp.com/get_freelancer_by_mail_id/${props.mail}`, {
        headers: headers
      }).then((response) => {
        setUser(response.data)
        setfeedbacks(response['data'].feedbacks);
      },(err)=> {
         console.log(err)
      })
    }
    else{
      axios.get(`https://cfc-restapi.herokuapp.com/get_client_by_mail_id/${props.mail}`, {
        headers: headers
      }).then((response) => {
        setUser(response.data);
        setfeedbacks(response['data'].feedbacks);
      },(err)=> {
         console.log(err)
      })
    }
  },[props.mail, props.type])


  const getCompletedWork = useCallback(() => {

    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }  

      if(props.type === 'freelancer'){
    axios.get(`https://cfc-restapi.herokuapp.com/get_finished_work/${user['_id']}`, {
        headers: headers
      }).then((response) => {
        let workWithRating = feedbacks.map((res) => res['work_id']);
        let filtereddata = response.data.map((real) => {
          if(workWithRating.includes(real['_id'])){
            real['feedback'] = feedbacks.filter((res) => res['work_id'] === real['_id'])[0].feedback;
            real['rating'] = feedbacks.filter((res) => res['work_id'] === real['_id'])[0].rating;
            return real
          }
          else{
            return real
          }
        })
        setProject(response.data)
      },(err)=> {
         console.log(err)
      })
    }
    else{
      axios.get(`https://cfc-restapi.herokuapp.com/get_client_finished_work/${user['_id']}`, {
        headers: headers
      }).then((response) => {
        let workWithRating = feedbacks.map((res) => res['work_id']);
        let filtereddata = response.data.map((real) => {
          if(workWithRating.includes(real['_id'])){
            real['feedback'] = feedbacks.filter((res) => res['work_id'] === real['_id'])[0].feedback;
            real['rating'] = feedbacks.filter((res) => res['work_id'] === real['_id'])[0].rating;
            return real
          }
          else{
            return real
          }
        })
        setProject(response.data)
      },(err)=> {
         console.log(err)
      })
    }
  },[user, props.type, feedbacks])

  useEffect(() => {
    getUser();
    getCompletedWork()
  }, [ getUser, getCompletedWork]);



  // function child(obj){
  //   return(
  //     <div className="card mb-4 box" onClick={e => handleClick}>
  //             <div className="card-body">
  //               <div className="row">
  //                 <div className="col-md-9">
  //                   <h5 className="card-title cfcprimary">{obj.heading}</h5>
  //                   <p className="card-text ">{obj.desc}</p>
  //                   <div className="row">
  //                       <div className="col-md-6">
  //                           <h5 className="card-title cfcprimary" > Described amount : <span className="fw-bold text-dark">{obj.cost}</span></h5>
  //                       </div>
  //                       <div className="col-md-6"> 
  //                           <h5 className="card-title cfcprimary" > Bid amount : <span className="fw-bold text-dark">{obj.bid}</span> </h5>  
  //                       </div>
  //                     </div>   
  //                 </div>
  //                 <div className="col-md-3  d-flex justify-content-between align-items-center" >
      
  //                     <button type="button" className="btn btn-outline-danger rounded-pill " >View Job</button>

  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //   )
  // }
  if(project.length > 0){
    return (
        <div className='applied-wrapper'>
       <h4 className=" text-center cfcprimary" onClick={e => handleClick()}> My Status </h4>
      <h4 className=" text-center cfcprimary"> Completed Projects </h4>
          <div className=" container justify-content-center " > 
          {
           project.map(function useCallback(object, i){
                    //  return child(object)setTemplate={e => handleClick()}
                    return <CompletedChild obj={object} />;
                },[project])
              }
            
           
          </div>
     
   </div>
        );
            }
            else{
              return(
                <div className='applied-wrapper'>
                  <h1 className=" text-center cfcprimary">Currently You didn't Completed anything</h1>
                </div>
              )
            }
}
  
  export default Completed;