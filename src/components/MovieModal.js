import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../index.css'


function MovieModal({movieRef, movieSummary, movieName, props, movieDirector}){

	//  Setting states for the modal to show and hide

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

	// We are returning a completed modal with added information of the name, summary, and creator/s of the object as well as an outside link to Amazon to get your own version of the product.

    return(
        <>
            <Button className="modalButton" variant="primary" onClick={handleShow}>View Details</Button>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{movieName} - {movieDirector}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{movieSummary}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button className="amazon" href={movieRef} target="_blank" rel="noreferrer noopener" variant="primary" onClick={handleClose}>Amazon</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
    
    
}

export default MovieModal