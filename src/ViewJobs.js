import  { useState } from 'react';
import './styles.css';
function ViewJobs(props) {
    let obj = props.obj;
    const[value, setValue] = useState(obj); 


    function clickHandler(e) {
        console.log(value)
        setValue(value);
    }
    return(
        <div>
        <div className=" justify-content-center " id="rightbar bar" >
    
                <div className="card  border-secondary mb-3 eventcard bid-widther" >
                    <div className="card-body" onClick={e => clickHandler(e)}>
                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.short_description}</p>
                            <p>Budget: <b>{value.amount}</b> <span className="right-div" ><i className="fas fa-map-marker-alt"></i> {value.location || ''}</span></p>
                        
                    </div>
                </div>

                <div className="card border-secondary mb-3 eventcard bid-widther"  >
                    <div className="card-body">
                        <h5 className="card-title">Details</h5>
                        <p className="card-text">{value.short_description}</p><br/>
                            <p className="card-text">{value.long_description}</p>   
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

