import React from 'react';

import Modal from './Modal'

function DeleteBadgeModal (props) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <div className="DeleteBadgeModal">
                <h1>You are about to DELETE this badge.</h1>
                <h1>Are you SURE?</h1>

                <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
                    DELETE
                </button>

                <button onClick={props.onClose} className="btn btn-primary">
                    CANCEL
                </button>
            </div>
        </Modal>
    )
}

export default DeleteBadgeModal;