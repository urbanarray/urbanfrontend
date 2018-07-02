import React from 'react';

import {Link} from 'react-router-dom';
import {Row, Col, Table} from 'react-bootstrap';

import { styles, headings } from '../../../assets/styles/variables';

const SimilarRoles = (props) => (
    <Row>
        <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary">
                <div className="panel-heading" style={styles.primaryDark}>
                    <h4 style={headings.tableHeading}>Similar Roles</h4>
              </div>

                { /* START table-responsive */}
                <Table id="table-ext-2" responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{width: '200px'}}>Role</th>
                            <th>Description</th>
                            <th>Date/Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.renderSimilarRoles()}
                    </tbody>
                </Table>
                { /* END table-responsive */}

                <div className="panel-footer">
                    <div className="text-right">
                        <Link to="#" >View All</Link>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
)

export default SimilarRoles;
