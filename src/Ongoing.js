import './Ongoing.css';
import './App.css';
import './styles.css';
import OngoingChild from './OngoingChild';
import { useState } from 'react';

function Ongoing() {
    let object = []
    const [project, setProject] = useState([{ heading:'Looking for beautiful female models',desc:'Looking for beautiful female models that can provide photos and videos for social media and online platforms.',cost:'₹2000 per hour',bid:'₹1500 per hour',status:'Pending'}]);
  
    function handleClick(){
      console.log(project)
      setProject(object)
     
    }
    if(project.length > 0){
    return (
        <div className='applied-wrapper' onClick={e => handleClick}>
       <h4 className=" text-center cfcprimary"> My Status </h4>
      <h4 className=" text-center cfcprimary"> Ongoing Projects </h4>
          <div className=" container" > 
           

          {
                project.map(function(object, i){
                  console.log(i)
                return <OngoingChild obj={object}/>;
                })
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