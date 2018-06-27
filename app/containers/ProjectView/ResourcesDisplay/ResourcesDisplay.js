import React from 'react';

import {Row, Col, Table, Model} from 'react-bootstrap';
import {styles} from '../../../assets/styles/variables';

const ResourcesDisplay = (props) => (
    <Col md={6}>
        <div id="panelDemo8" className="panel panel-primary">
            <div className="panel-heading" style={styles.primaryDark}>
                <Row>
                    <Col md={6}>
                        Resources
                    </Col>
                    <Col md={6}>
                        <button onClick={this.open} className="btn btn-primary pull-right" style={{}}> Resources </button>
                    </Col>
                </Row>
            </div>
            { /* START table-responsive */}
            <Table id="table-ext-2" responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity </th>
                        <th>Location Needed</th>
                        <th>Date/Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.renderProjectResources()}
                </tbody>
            </Table>
            { /* END table-responsive */}

            {/* <div className="panel-footer">Panel Footer</div> */}
        </div>
    </Col>
)

export default ResourcesDisplay;