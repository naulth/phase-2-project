import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../index.css'


function BookDeleteModal({bookId, deleteBook}){
    
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        deleteBook(bookId)

        fetch(`http://localhost:3000/books/${bookId}`,{
          method: 'DELETE'
        })
        
    };
    const handleShow = () => setShow(true);

    return(
        <>
        <Button className="modalButton" variant="primary" onClick={handleShow}>
        🗑️
        </Button>
  
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} 
            onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
    
    
}

export default BookDeleteModal