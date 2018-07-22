import React from 'react';

import { Row, Col, Table } from 'react-bootstrap';
import { styles, headings } from 'assets/styles/variables';

const ResourcesDisplay = (props) => (
    <Col md={6}>
        <div id="panelDemo8" className="panel panel-primary">
            <div className="panel-heading" style={styles.primaryDark}>
                <Row>
                    <Col md={6}>
                        <h4 style={headings.tableHeading}>Resources </h4>
                    </Col>
                    <Col md={6}>
                        <button style={{marginTop: '3.0px'}} onClick={this.open} className="btn btn-primary btn-success pull-right" > Resources </button>
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
