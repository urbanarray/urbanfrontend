import React, { Component } from 'react';

import {Modal, Col, Button} from 'react-bootstrap';
import {styles} from '../../../assets/styles/variables';

class DetailsButton extends Component {
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
            details: "This is a wonderful resource, maybe we will have more details about this later!"
        })
    }

    renderModal() {
        return(
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.resource}</Modal.Title>
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
                    <span> Details </span>
                </button>
                {this.renderModal()}
            </div>

        )
    }

}

export default DetailsButton;
