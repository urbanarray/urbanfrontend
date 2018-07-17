import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';
import {styles} from '../../../assets/styles/variables';

class ResourcesButton extends Component {
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
            details: "Information about this resource coming soon!"
        })
    }

    renderModal() {
        return(
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.task.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.details}
                </Modal.Body>
                <Modal.Footer>
                    <button style={styles.primary} onClick={this.close}>Cancel</button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.open} className="btn btn-block" style={styles.secondary} >
                {/* need span to wrap text, otherwise we get a nodeparent error */}
                    <span> Resources </span>
                </button>
                {this.renderModal()}
            </div>

        )
    }

}

export default ResourcesButton;
