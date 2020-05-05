import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Transfer from '../Transfer/Index';

class TransferModal extends Component {
    render() {
        return (
            <Modal
            {...this.props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
              <Transfer />
          </Modal>
        )
    }
}

export default TransferModal;