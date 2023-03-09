import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../index.css'


function BookModal({bookRef, bookSummary, bookName, bookAuthor}){
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Button className="modalButton" variant="primary" onClick={handleShow}>
          View Details
        </Button>
  
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{bookName} - {bookAuthor}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{bookSummary}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className="amazon" href={bookRef} variant="primary" onClick={handleClose}>
              Amazon
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
    
    
}

export default BookModal