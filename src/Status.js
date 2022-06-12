


   
import './Status.css';
import './App.css';
import './styles.css';
import appliedproject from './appliedproject.png';
import completedproject from './completedproject.png';
import ongoingproject from './ongoingproject.png';
import Ongoing from './Ongoing';
import Applied from './applied';
import Completed from './Completed';
import { FaArrowRight } from "react-icons/fa";
import Description from './Description';
function Status(props) {

    function handleClick(params) {
        console.log(props,'prop')
        if(params === 'ongoing'){
            props.setValue(<Ongoing  mail={props.email} type={props.type}  changeValue={e => handleClick('completed')}/>)
    }
        else if(params === 'completed'){
            props.setValue(<Completed mail={props.email} changeValue={e => changeTemplate(e)} type={props.type} />)
        }
        else{
            props.setValue(<Applied mail={props.email} type={props.type} changeValue={e => openProposal(e)}/>)
        }
    }

    function openProposal(params){
        props.setValue(params)
    }
    function changeTemplate(e){
        console.log(e,'desc')
       props.setValue(<Description obj={e}/>)
    }

    return (
        <div className='applied-wrapper'>
       <div className="container">
        <div className="d-lg-flex">
            <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
                <div className="backgroundEffect"></div>
                <div className="pic" onClick={e => handleClick('applied')}>
                    <img src={appliedproject} className="rounded mx-auto d-block" width="350" height="250"
                        alt="loading..."/>

                </div>
                <div className="content">
                    <div className="d-flex align-items-center justify-content-center mt-3 pb-3">
                        <div className="btn btn-outline-danger"onClick={e => handleClick('applied')}>Applied Project<FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
                <div className="backgroundEffect"></div>
                <div className="pic" onClick={e => handleClick('ongoing')}>
                    <img src={ongoingproject} className="rounded mx-auto d-block" width="350" height="250"
                        alt="loading..."/>

                </div>
                <div className="content">

                    <div className="d-flex align-items-center justify-content-center mt-3 pb-3">
                        <div className="btn btn-outline-danger" onClick={e => handleClick('ongoing')}>Ongoing Project<FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-0 mb-lg-0 mb-4">
                <div className="backgroundEffect"></div>
                <div className="pic" >
                    <img src={completedproject} className="rounded mx-auto d-block" width="350" height="250"
                        alt="loading..."/>
                </div>
                <div className="content">
                    <div className="d-flex align-items-center justify-content-center mt-3 pb-3">
                        <div className="btn btn-outline-danger" onClick={e => handleClick('completed')}> Completed Project<FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <br/>
   </div>
        );
}
  
  export default Status;