import './applied.css';
import AppliedChild from './AppliedChild';
import { useCallback, useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import ClientAppliedChild from './ClientWork';
import Proposal from './Proposal';
function Applied(params) {
  let object = []
  const [project, setProject] = useState([]);
  const [user, setUser]= useState([]);
  function handleClick(){
    setProject(object)
  }


  



  const getWork = useCallback(() => {
    if(params.type === 'freelancer'){
    console.log(params)
    let headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
  
    }  
    axios.get(`https://cfc-restapi.herokuapp.com/get_active_work`, {
    headers: headers
  }).then((response) => {
       let filterWork = response.data.filter((res) => res['proposals'].some((real) => user['applied_proposal'].includes(real)));
       console.log(filterWork,'filteredwork', )
       filterWork = filterWork.filter((res) => !user['ongoing_proposal'].some(r=> res['proposals'].includes(r)));
       filterWork = filterWork.filter((res) => !user['finished_proposal'].some(r=> res['proposals'].includes(r)));
       
       setProject(filterWork)
  })
}
else{
  let headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',

}
  axios.get(`https://cfc-restapi.herokuapp.com/get_active_work`, {
  headers: headers
}).then((response) => {
  console.log(response,'response')
  let arrayObj = [];
    let leap = response.data.filter((reap) => reap['client_id'] === user['_id']);
    
    arrayObj = leap.map(function(reap) {
      let  obj = { heading:reap.title,desc:reap.long_description,cost:reap.amount,bid:'',status:'Ongoing', work_id:reap['_id'], proposals: reap['proposals']}
      return obj
  })
  // let filterWork = arrayObj.filter((res) => res['proposals'].some((real) => user['posted_work'].includes(real)));
  // filterWork = filterWork.filter((res) => !user['ongoing_work'].some(r=> res['proposals'].includes(r)));
  // filterWork = filterWork.filter((res) => !user['finished_work'].some(r=> res['proposals'].includes(r)));
  // console.log(filterWork,'filterWork',user)
  let filterWork = arrayObj.filter((res) => !user['ongoing_work'].includes(res['work_id']));
  filterWork = filterWork.filter((res) => !user['finished_work'].includes(res['work_id']));
    setProject(filterWork);

},(err)=> {
  alert("Incorrect E-mail");
})
}
  },[params, user])

  function proposal(e){
    params.changeValue(<Proposal obj={e.data} heading={e.heading} mail={params.mail} setValue={e => proposalFinshed(e)}/>);
  }


  function proposalFinshed(e){
    params.changeValue('ongoing');
  }

  const fetchBusinesses = useCallback(() => {

    console.log(params)
    let headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
  
    }  
    if(params.type === 'freelancer'){
      axios.get(`https://cfc-restapi.herokuapp.com/get_freelancer_by_mail_id/${params.mail}`, {
        headers: headers
      }).then((response) => {
        console.log(response,'res')
        setUser(response.data);
        getWork();
        // 
      },(err)=> {
        alert("Incorrect E-mail");
         console.log(err)
      })
    }
    else{
    axios.get(`https://cfc-restapi.herokuapp.com/get_client_by_mail_id/${params.mail}`, {
    headers: headers
  }).then((response) => {
    setUser(response.data);
    getWork();
  },(err)=> {
    alert("Incorrect E-mail");
     console.log(err)
  })
}
  },[params, getWork])

  useEffect(() => {
    fetchBusinesses();
  }, [fetchBusinesses]);



  if(project.length > 0){
    console.log(project,'pro')
    return (
        <div classNameName='applied-wrapper'>
        <h4 className=" text-center cfcprimary" > My Status </h4>
        <h4 className=" text-center cfcprimary" onClick={e => handleClick}> Applied Projects </h4>
            <div className=" container justify-content-center " > 
              {
                project.map(function(object, i){
                  if(params.type === 'freelancer'){
                return <AppliedChild obj={object}/>;
                  }
                else{
                  return <ClientAppliedChild obj={object}  proposalClick={e => proposal(e)}/>;
                    
                    // props.setValue(<ClientAppliedChild  mail={props.email} type={type}/>)
        //{ heading:'Looking for beautiful female models',desc:'Looking for beautiful female models that can provide photos and videos for social media and online platforms.',cost:'₹2000 per hour',bid:'₹1500 per hour',status:'Pending'}
                }
              
              },[project, params])
              }
              {/* <div className="card mb-4 box">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-9">
                      <h5 className="card-title cfcprimary">Looking for beautiful female models</h5>
                      <p className="card-text ">Looking for beautiful female models that can provide photos and videos for social media and online platforms.</p>
                      <div className="row">
                          <div className="col-md-6">
                              <h6 className="card-title cfcprimary" > Described amount : <span className="fw-bold text-dark">₹2000 per hour</span></h6>
                          </div>
                          <div className="col-md-6"> 
                              <h6 className="card-title cfcprimary" > Bid amount : <span className="fw-bold text-dark">₹1500 per hour</span> </h6>  
                          </div>
                        </div>   
                    </div>
                      <div className="col-md-3  d-flex justify-content-between align-items-center">
                          <h6 className="card-title cfcprimary" > Status : <span className="fw-bold text-dark">Rejected</span></h6>
                      </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="card mb-4 box">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-9">
                      <h5 className="card-title cfcprimary">Looking for beautiful female models</h5>
                      <p className="card-text ">Looking for beautiful female models that can provide photos and videos for social media and online platforms.</p>
                      <div className="row">
                          <div className="col-md-6">
                              <h6 className="card-title cfcprimary" > Described amount : <span className="fw-bold text-dark">₹2000 per hour</span></h6>
                          </div>
                          <div className="col-md-6"> 
                              <h6 className="card-title cfcprimary" > Bid amount : <span className="fw-bold text-dark">₹1500 per hour</span> </h6>  
                          </div>
                        </div>    
                    </div>
                      <div className="col-md-3  d-flex justify-content-between align-items-center">
                          <h6 className="card-title cfcprimary" > Status : <span className="fw-bold text-dark">Rejected</span></h6>
                      </div>
                  </div>
                </div>
              </div> */}
            </div>
  
     
   </div>
        );}
        else{
          return(
            <div class=" container justify-content-center align-items-center" id="prpjob"> 
            <div class="card mb-4 eventcard " id="ept">
                <div class="card-body ">
                  <div class="row ">
                    <div class="col-md-9">
                      <h5 class="card-title cfcprimary centered-align">Currently You didn't applied for anything</h5>
                    </div>
                    </div>
                  </div>
              </div>
          </div>

            // <div className='applied-wrapper'>
            //   <h1 className=" text-center cfcprimary"></h1>
            // </div>
          )
        }
      
      }
  
  export default Applied;