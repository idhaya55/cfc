import './Profile.css';
import './App.css';
import './styles.css';
import { useCallback, useEffect, useState } from 'react';
import ProposalChild from './ProposalChild';
function Proposal(props) {

    // const headers = {
    //     'accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   }  


    const [profile, setProfile] = useState(props.obj)
    const [heading, setHeading] = useState(props.heading)
   

    const fetchBusinesses = useCallback(() => {
        setProfile(props.obj)
        setHeading(props.heading)
      },[props])
    
      useEffect(() => {
        fetchBusinesses();
      }, [fetchBusinesses]);


      function handleClick(e){
          console.log(e)
      }
       
      if(profile.length > 0){
        return (
            <div className='applied-wrapper' onClick={e => handleClick(e)}>
           <h4 className=" text-center cfcprimary"> Proposals </h4>
          <h4 className=" text-center cfcprimary">{heading}</h4>
              <div className=" container" > 
               
    
              {
                    profile.map(function useCallback(object, i){
                      return <ProposalChild obj={object}/>;
                    },[profile])
                  }
                </div>
         
       </div>
            );
                }
                else{
                    return(
                        <div className='applied-wrapper'>
                          <h1 className=" text-center cfcprimary">Currently You don't have any Proposal</h1>
                        </div>
                      )
                }
}
  
  export default Proposal;