import axios from 'axios';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';

function CompletedChild(params) {
    let [project, setProject] = useState(params.obj);
    const [formObject, setformObject] = useState({comment:'',rating:0});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRate = () => {
        proposalClicked();
        setShow(false);
    }


    function proposalClicked(){
      let headers = {
          'accept': 'application/json',
          'Content-Type': 'application/json',
      
      }
        axios.put(`https://cfc-restapi.herokuapp.com/client_finish_work/${project.proposal_details['_id']}/${formObject.comment}/${formObject.rating}`, {
        headers: headers
      }).then((response) => {
         console.log(response);
      },(err)=> {
         console.log(err)
      })
  }

    function handleClick(e){
        setProject(project);
        console.log(project)
        // params.setTemplate(obj);
      }
   
    return (
        <div className="card mb-4 box" onClick={e => handleClick(e)}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-9">
                    <h5 className="card-title cfcprimary">{project.title}</h5>
                    <p className="card-text ">{project.long_description}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="card-title cfcprimary" > Described Duration : <span className="fw-bold text-dark">{project.duration}</span></h5>
                        </div>
                        <div className="col-md-6"> 
                            <h5 className="card-title cfcprimary" > Bid amount : <span className="fw-bold text-dark">{project.amount}</span> </h5>  
                        </div>
                      </div>   
                  </div>
                  <div className="col-md-3  d-flex justify-content-between align-items-center" >
      
                      <button type="button" className="btn btn-outline-danger rounded-pill " onClick={handleShow}>Add Review</button>
                      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <StarRating
        defaultValue={5}
        min={0}
        max={10}
        value={formObject.rating} 
        onChange={e => setformObject({comment:formObject.comment,rating:e.target.value})}
        step={0.5} />
          <Form>
          
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
               value={formObject.rating}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group> */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Feedback Comment</Form.Label>
              <Form.Control as="textarea" rows={3} value={formObject.comment} onChange={e => setformObject({comment:e.target.value,rating:formObject.rating})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRate}>
           Rate
          </Button>
        </Modal.Footer>
      </Modal>
                  </div>
                </div>
              </div>
            </div>
    )
}
export default CompletedChild;