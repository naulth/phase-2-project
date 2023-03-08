import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function BookModal({bookRef, bookSummary, bookName}){
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          View Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{bookName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{bookSummary}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button href={bookRef} variant="primary" onClick={handleClose}>
              Amazon
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
    
    
}

export default BookModal