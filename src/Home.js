



import './Home.css';
import './App.css';
import './styles.css';
import land1 from './land1.jpg';
import landingwhattodo from './landingwhattodo.jpg';
import Freelancer from './Freelancer.jpg';
import client from './Client.jpg';
function Home() {
  return (

      <div className='home-wrapper'>
          <br /><br />
<div className="container ">

<div className="card box">

    <div className="row">
      <div className="col right-padding">
        <h2 className="card-title cfc-red">Chennai Freelancers Club <br/>
          Find Chennai's most wanted talents</h2>
          <div className="card-body">
            A freelancer is an independent laborer who earns wages on a per-job or per-task basis, typically for
          short-term work. Benefits of freelancing include having the freedom to work from home, a flexible work
          schedule, and a better work-life balance.
          </div>
         
     
      </div>
      <div className="col">
        <img src={land1} className="rounded mx-auto d-block" width="350" alt="loading..." />

      </div>
      
    </div>
  </div>
</div>
<br/>

<div className="container ">
  <div className="card box">
    <div className="card-body">
      <div className="row">
        <div className="col ">
          <h2 className="card-title cfc-red">Have work</h2>
          <ul>
            <li>Post your job with the skills expected from the freelancer on doing that job.</li>
            <li>Provide attachment for reference to the current job.</li>
            <li>Mention the amount you can pay for the project for the freelancer to bid.</li>
            <li>A right service provider will approach you with his service details. </li>
            <li>Accept the freelancer whose service matches your profile.</li>
            <li>Have your business dealing and get your work done.</li>
            <li>Pay for the service provided to you.</li>
          </ul>

          <h4><span className="cfc-red " > Happy freelancing </span></h4>
        </div>
        <div className="col column">
          <img src={Freelancer} className="rounded mx-auto d-block image-box" width="350" alt="loading..." />
        </div>
      </div>
    </div>
  </div>
  </div>
  <br/>

  <div className="container ">
    <div className="card box">
      <div className="card-body">
        <div className="row">
          <div className="col ">
            <h2 className="card-title cfc-red">Need work</h2>
            <ul>
              <li>Find hundred of jobs under all categories from various clients.</li>
              <li>Choose the one which is relevant for you and match your skills .</li>
              <li>Bid for the job with the amount for which you can do the project and with a cover letter and the
                duration within which you can complete it.</li>
              <li>You will notified if the client accepts your proposal.</li>
              <li>Complete the job with good client satisfaction with the provided duration.</li>
              <li>Get paid from the client.</li>
            </ul>

            
          </div>
          <div className="col column">
            <img src={client} className="rounded mx-auto d-block" width="350" alt=" loading..." />
          </div>
        </div>
      </div>
    </div>
    </div>
    <br/>

  
    <div className="container">
  <div className="card box right-padding">
    <h3 className="cfc-red"> What to do ?</h3>
    <div className="card-body">
      <img src={landingwhattodo} className="card-img-top img-fluid"  alt="Landing..." />
    </div>
  </div>
  </div>
  <br /><br />
  </div>
  );
  }


export default Home;