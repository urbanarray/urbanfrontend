import React, { Component } from 'react';

import { Modal, Col } from 'react-bootstrap';
import { styles } from 'assets/styles/variables';

class ClaimButton extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            details: "",
            style: ""
        };
    }

    close = () => {
        this.setState({
            showModal: false
        });
    }

    open = () => {
        this.setState({
            showModal: true
        });
    }

    componentDidMount() {
        this.setState({
            details: "Details about needed resource coming soon!"
        })
    }

    renderButton() {
      if (this.props.windowWidth < 600) {
        return (
          <button onClick={this.open} className="btn btn-block btn-primary" style={styles.primaryLight}>
            <span> Details/Claim </span>
          </button>
        )
      } else {
        return (
          <button onClick={this.open} className="btn btn-block btn-primary" style={styles.primary}>
            <span> Details/Claim </span>
          </button>
        )
      }
    }

    renderModal() {
        return(
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.details}
                </Modal.Body>
                <Modal.Footer>
                    <button style={this.state.style} onClick={this.close}>Cancel</button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {
        return (
            <div>
                {this.renderButton()}
                {this.renderModal()}
            </div>

        )
    }

}

export default ClaimButton;
