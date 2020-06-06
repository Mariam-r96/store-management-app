import React from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
const Modal = ()=>{
    return(
        <div className="Modal-container">
            <div className="Modal-content">
                <div className="modal-option">
                    <p>Add</p>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className="modal-option">
                    <p>Edit</p>
                    <FontAwesomeIcon icon={faEdit} />
                </div>
            </div>
        </div>
    );
}

export default Modal;