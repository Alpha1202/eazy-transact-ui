import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import Credit from '../Transfer/CreditModal';

class CreditModal extends Component {
    render() {
        return (
            <Modal
            {...this.props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
              <Credit />
          </Modal>
        )
    }
}

export default CreditModal ;
