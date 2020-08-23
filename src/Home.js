import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import {Modal} from '@material-ui/core/';

export default function Home() {
    const history = useHistory()
    const {modal} = useParams()

    return (
        <div>
        <Modal
                open={modal === "create-pin"}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                body="<div>create pin</div>"
            >
        </Modal>
        <Modal
                open={modal === "choose-a-security-option"}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
        </Modal>
        </div>
    )
}
