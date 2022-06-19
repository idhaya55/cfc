import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

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
        if(response){
          project['rating'] = formObject['rating'];
          project['feedback'] = formObject['comment'];
        }
      },(err)=> {
         console.log(err)
      })
  }

    function handleClick(e){
        setProject(project);
        // params.setTemplate(obj);
      }


      const getRating = useCallback(() => {
        if(params['obj'].rating || params['obj'].feedback){
          setformObject({comment:params['obj'].feedback, rating:Number(params['obj'].rating)})
        }
      },[params])



      function setObject(e, value){
           if(value === 'comment'){
            setformObject({comment:e.target.value,rating:formObject.rating})
            
           }
           else{
            setformObject( {comment:formObject.comment,rating:e})
           }
      }
      useEffect(() => {
        getRating();
      }, [getRating]);
   
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
                      <button type="button" className="btn btn-outline-danger rounded-pill " onClick={handleShow}>{project.rating === '0' && project.feedback === "Not Entered Yet"? 'Add Review' : 'View Review'}</button>
                      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <StarRatings
          rating={formObject.rating}
          starRatedColor="blue"
          changeRating={newRating => setObject(newRating, 'rating')}
          numberOfStars={6}
          name='rating'
        />
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
              <Form.Control as="textarea" rows={3} value={formObject.comment} onChange={e => setObject(e, 'comment')}/>
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