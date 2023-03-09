import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../index.css'


function GameModal({gameRef, gameSummary, gameName, gameDeveloper}){
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button className="modalButton" variant="primary" onClick={handleShow}>View Details</Button>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{gameName} - {gameDeveloper}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{gameSummary}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button className="amazon" href={gameRef} target="_blank" rel="noreferrer noopener" variant="primary" onClick={handleClose}>Amazon</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default GameModal