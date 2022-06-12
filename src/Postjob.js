import './Postjob.css';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Postjob(prop) {

  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  }  

    let obj ={title:'',short_desc:'',desc:'',location:'',address:'',type:'',skills:'',duration:'',date:'',amount:'',org_name:'',org_mail:'',org_website:'',attachment:''}
    const [project, setProject] = useState(obj)
    const [client, setClient] = useState({})
    function onChange(key, value){
            let temp = {title:project.title,short_desc:project.short_desc,desc:project.desc,location:project.location,address:project.address,type:project.type,skills:project.skills,duration:project.duration,date:project.date,amount:project.amount,org_name:project.org_name,org_mail:project.org_mail,org_website:project.org_website,attachment:project.attachment}
            temp[key] = value;
            console.log(temp)
            setProject(temp);
    }

    useEffect(() => { 
      axios.get(`https://cfc-restapi.herokuapp.com/get_client_by_mail_id/${prop.email}`, {
        headers: headers
      }).then((response) => {
       setClient(response.data)
      },(err)=> {
        alert("Incorrect E-mail");
         console.log(err)
      })
    })


  
    function postWork(e){
            let obj2 = {
              "title": project.title,
              "short_description": project.short_desc,
              "long_description": project.desc,
              "amount": project.amount,
              "duration": project.duration,
              "documents": project.attachment,
              "skills_required": [
                project.skills
              ],
              "client_id": client._id
            }
       axios.post(`https://cfc-restapi.herokuapp.com/post_work`,obj2, {
         headers: headers
       }).then((response) => {
         prop.jobPosted('job posted')
       },(err)=> {
          console.log(err)
       })
        
   }

    return(
    
    <div className="container ms-auto " >
        <form >
          
          <h2 className="text-center cfcprimary">Post a Job</h2><br/>
          <div className="row justify-content-evenly">
            <div className="col-lg-5  rounded shadow-lg p-3 mb-5 p-5 postcss">
                <label className="form-label cfcprimary">Job Title</label>
                  <input type="text" className="form-control  cfcprimary"  required placeholder="Enter Job Title" value={project.title} onChange={(e) => {onChange('title',e.target.value)}} />
    
              <label className="form-label cfcprimary">Short Description</label>
                  <input type="text" className="form-control  cfcprimary" placeholder="Enter Short Description" value={project.short_desc} onChange={(e) => {onChange('short_desc',e.target.value)}} required/>
              
                <label className="form-label cfcprimary">Long Description</label>
                  <textarea className="form-control  cfcprimary"   placeholder="Enter Long Description" required value={project.desc} onChange={(e) => {onChange('desc',e.target.value)}}></textarea><br/>

                  <label className="form-label cfcprimary">Job Location</label><br/>
                      <input type="radio"  name="mode" value="Online" onChange={(e) => {onChange('location','Online')}}/>
                      <label htmlFor="online">Remote</label>&nbsp;
                      <br/>
                      <input type="radio"  name="mode" id="ofl" value="Offline"  onChange={(e) => {onChange('location','Offline')}}/>
                      <label htmlFor="offline">Offline</label><br/>
                      <label className="form-label cfcprimary">Place (If offline, enter the Address)</label>
                        <input type="text" className="form-control cfcprimary" placeholder="Enter the Address"  value={project.address} onChange={(e) => {onChange('address',e.target.value)}} required/>
                        <br/>
                    
                      <label className="form-label cfcprimary">Type</label><br/>
                      <input type="radio"  name="type"  value="Technical" onChange={(e) => {onChange('type','Technical')}}/>
                      <label htmlFor="technical">Technical</label>&nbsp;
                      <input type="radio"  name="type" value="Non-Technical" onChange={(e) => {onChange('type','Non-Technical')}}/>
                      <label htmlFor="nontechnical">Non-Technical</label><br/><br/>

                      <label className="form-label cfcprimary">Skills Required</label>
                      <input type="text" className="form-control  cfcprimary"   placeholder="Enter Skills Required" value={project.skills} onChange={(e) => {onChange('skills',e.target.value)}} required />
                    </div><br/>       
<br/>
              <div className="col-lg-5 rounded shadow-lg p-3 mb-5 p-5 postOtherJob"> 
              
                      <label className="form-label cfcprimary">Duration</label>
                      <input type="text" className="form-control  cfcprimary" placeholder="Enter Duration" value={project.duration} onChange={(e) => {onChange('duration',e.target.value)}} required/>

                  <label className="form-label cfcprimary">Start Date</label>
                  <input type="date" className="form-control cfcprimary" value={project.date} onChange={(e) => {onChange('date',e.target.value)}} required/>


                  <label className="form-label cfcprimary">Payment</label><br/>
                      <label className="form-label cfcprimary">Amount (₹)</label><br/>
                      <input type="text" className="form-control cfcprimary" placeholder="Enter the Amount" value={project.amount} onChange={(e) => {onChange('amount',e.target.value)}} required/><br/>

                  <h4 className='boldHeading'> Organiser Details</h4>
                  <hr className="mb-2"/>
                  <label className="form-label cfcprimary">Organization Name<b>*</b></label><br/>
                  <input type="text" className="form-control cfcprimary" placeholder="Enter Organization Name" value={project.org_name} onChange={(e) => {onChange('org_name',e.target.value)}} required/>
                  <label className="form-label cfcprimary" htmlFor="orgmail">Organization Email ID<b>*</b></label>
                  <input list="orgmails" type="email" className="form-control cfcprimary" placeholder="Enter Organization Mail ID" value={project.org_mail} onChange={(e) => {onChange('org_mail',e.target.value)}}  required/>
                  <label className="form-label cfcprimary">Organization Website</label><br/>
                  <input type="url" className="form-control cfcprimary" placeholder="Enter Organization Website Link" value={project.org_website} onChange={(e) => {onChange('org_website',e.target.value)}} required/>
                  <label className="form-label cfcprimary">Attachments</label><br/>
                  <input type="file" className="form-control cfcprimary" value={project.attachment} onChange={(e) => {onChange('attachment',e.target.value)}}/>

             </div>
              <div className="d-flex justify-content-center my-3">
  
                <button className="btn btn-outline-danger btn-md me-md-2 rounded-pill" type="button" onClick={e => postWork(e)}><b>Post a Job</b></button>
                </div>   
          </div>      
        </form>
      </div>
    )
}

export default Postjob;