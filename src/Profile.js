import axios from 'axios';
import './Profile.css';
import './App.css';
import './styles.css';
import delwin from './Delwin.jpeg';
import { useEffect, useState } from 'react';
function Profile(props) {

    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }  

    
    let params = {name:'',number:'',mail:'',dob:'',skills:'',rate:'',location:''}
    const [profile, setProfile] = useState(params)
    let obj = params;
    function handleClick(){

        setProfile(obj)
       
      }

      useEffect(() => {
          if(props.type === 'freelancer'){
        axios.get(`https://cfc-restapi.herokuapp.com/get_freelancer_by_mail_id/${props.email}`, {
            headers: headers
          }).then((response) => {
            if(response){
                setProfile({name:response.data['username'],number:response.data['mobile'],mail:response.data['mail_id'],dob:response.data['dob'],skills:response.data['skills'] || '',rate:response.data['description'] || '',location:response.data['address'] || '',profile_picture:response.data['profile_picture']})

            }
            
            // 
          },(err)=> {
             console.log(err)
          })
        }
        else{
            axios.get(`https://cfc-restapi.herokuapp.com/get_client_by_mail_id/${props.email}`, {
                headers: headers
              }).then((response) => {
                if(response){
                    setProfile({name:response.data['username'],number:response.data['mobile'],mail:response.data['mail_id'],dob:response.data['dob'],skills:response.data['skills'] || '',rate:response.data['description'] || '',location:response.data['address'] || '',profile_picture:response.data['profile_picture']})
    
                }
                
                // 
              },(err)=> {
                 console.log(err)
              })
        }
      })
        // const fetchProfileDetails = () => {
        // axios.get(`https://cfc-restapi.herokuapp.com/get_freelancer_by_mail_id/${props.email}`, {
        //     headers: headers
        //   }).then((response) => {

        //     if(response){
        //         setProfile({name:response.data['username'],number:response.data['mobile'],mail:response.data['mail_id'],dob:response.data['dob'],skills:response.data['skills'] || '',rate:response.data['rate'] || '',location:response.data['location'] || '',profile_picture:response.data['profile_picture']})

        //     }
         
        //   },(err)=> {
        //      console.log(err)
        //   })
        // }

        // fetchProfileDetails();
       
    return (
        <div className='applied-wrapper' onClick={e => handleClick}>
      <h3 className=" text-center cfcprimary"> Your Profile </h3><br/>
      <div className=" container justify-content-center " >     
          <div className="row justify-content-evenly ">
              <div className=" col-lg-4 mb-4  ">
                  <div className="card rounded-form"><br/>
                      <img className="card-img-top  card_img" src={delwin}   alt="User_Image"  /><br/>
                        <div className="card-body text-center card_info ">
                          <h5 className="card-title cfcprimary">{profile.name || ''} </h5>
                          <p className="card-text ">
                            {profile.mail || ''} <br/> {profile.number || ''} <br/>
                          </p><br/>
                      </div>
                  </div>
              </div>
              <div className=" col-lg-6 mb-4 ">
                  <div className="card table-responsive-md rounded-form">
                      <div className="card-body ">
                        <table className="table table-borderless  " >
                          <tr>
                              <td>Name</td>
                              <td>:</td>
                              <td>{profile.name || ''}</td>
                          </tr>
                          <tr>
                              <td>E-mail</td>
                              <td>:</td>
                              <td>{profile.mail || ''}</td>
                          </tr>
                          <tr>
                              <td>Mobile No</td>
                              <td>:</td>
                              <td>{profile.number || ''}</td>
                          </tr>
                          <tr>
                              <td>DOB</td>
                              <td>:</td>
                              <td>{profile.dob  === 'not' ? '' : profile.dob}</td>
                          </tr>
                          <tr>
                              <td>skills</td>
                              <td>:</td>
                              <td>{profile.user_type === 'client' ? (profile.expected_skills || '') : (profile.skills || '')}</td>
                          </tr>
                          <tr>
                              <td>Charges</td>
                              <td>:</td>
                              <td>{profile.rate === 'not' ? '' : profile.rate}</td>
                          </tr>
                          <tr>
                              <td>Location</td>
                              <td>:</td>
                              <td>{profile.location === 'not' ? '' : profile.location}</td>
                          </tr>
                      </table>
                            
                      </div>
                  </div>
              </div>
          </div>
      </div>
     
   </div>
        );
}
  
  export default Profile;