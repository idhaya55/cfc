import './Completed.css';
import './App.css';
import { useState } from 'react';
import './styles.css';
import React from 'react';
// import CompletedChild from './CompletedChild';
// import Description from './Description';
import CompletedChild from './CompletedChild';
function Completed(props) {
  let object = [];

  const [project, setProject] = useState([{ heading:'Looking for beautiful female models',desc:'Looking for beautiful female models that can provide photos and videos for social media and online platforms.',cost:'₹2000 per hour',bid:'₹1500 per hour',status:'Pending'}]);

  function handleClick(){
    // props.changeValue(<Description />)
    setProject(object)
    console.log(object,'comp')
    

   
  }



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
             React.Children.toArray(project.map(function(object, i){
                    //  return child(object)setTemplate={e => handleClick()}
                    return <CompletedChild obj={object} key={i} />;
                }))
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