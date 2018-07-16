import React, { Component } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { styles } from 'assets/styles/variables';

class ClaimButton extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            details: ""
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
            details: "Check back later to claim!"
        })
    }

    renderModal() {
        return(
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.similarRole.role}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.details}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.open} className="btn btn-block" style={styles.primary} >
                {/* need span to wrap text, otherwise we get a nodeparent error */}
                    <span> Claims </span>
                </button>
                {this.renderModal()}
            </div>

        )
    }

}

export default ClaimButton;
