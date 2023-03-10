import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../index.css'


function MovieDeleteModal({movieId, deleteMovie}){

    // setting state to show and hide modal. as well as handling the deletion of the obj from the database

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };

    const handleDelete = () => {
        deleteMovie(movieId)

        fetch(`http://localhost:3000/movies/${movieId}`,{
        method: 'DELETE'
        })
    }

    const handleShow = () => setShow(true);

    return(
        <>
            <Button className="modalButton" variant="primary" onClick={handleShow}>
                <span role="img" aria-labelledby="waste-basket">🗑️</span>
            </Button>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MovieDeleteModal