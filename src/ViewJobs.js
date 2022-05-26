import  { useState } from 'react';
import './styles.css';
function ViewJobs(props) {
    const[value, setValue] = useState({name:'',email:'',password:'', password_2:'',number:'',type:''}); 


    function clickHandler() {
        setValue(value);
    }
    return(
        <div>
        <div className=" justify-content-center " id="rightbar bar" onClick={e => clickHandler}>
    
                <div className="card  border-secondary mb-3 eventcard bid-widther" >
                    <div className="card-body">
                        <h5 className="card-title">YouTube Video Creator/Content Manager</h5>
                        <p className="card-text">Seeking a content creator to create Youtube video around meditation and relaxtion</p>
                            <p>Budget: <b>$100</b> <span className="right-div" ><i className="fas fa-map-marker-alt"></i> Nungambakkam</span></p>
                        
                    </div>
                </div>

                <div className="card border-secondary mb-3 eventcard bid-widther"  >
                    <div className="card-body">
                        <h5 className="card-title">Details</h5>
                        <p className="card-text">Seeking a content creator to create YouTube videos around meditation and
                            relaxation.</p><br/>
                            <p className="card-text">This job as the potentail for long-term contract.</p>   
                    </div>
                </div>
                <div className="card border-secondary mb-3 eventcard bid-widther">
                    <div className="card-body">
                        <h5 className="card-title">Attachment</h5>
                        <a href="#/" className="card-link"><img src="attach.png" width="30px" height="30px" alt='Loading'/>video sample.mp4</a><br/>
                    </div>
                </div>
                

               
    </div>
        
        

<div>
<button type="button" className="btn btn-outline-danger rounded-pill right-div" onClick={e => props.changeTemplate('bid')}>Bid job</button>
</div><br/>
<hr></hr>
</div>
    )
}

export default ViewJobs;

