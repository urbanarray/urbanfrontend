import React from 'react';

import {Link} from 'react-router-dom';
import {Col, Table} from 'react-bootstrap';

import { styles, headings } from '../../../assets/styles/variables';

const ResourcesNeeded = (props) => (
    <Col md={4}>
        <div id="panelDemo8" className="panel panel-primary">
            <div className="panel-heading" style={styles.primaryDark}>
                <h4 style={headings.tableHeading}>All Resources Needed</h4>
              </div>

            { /* START table-responsive */}
            <Table id="table-ext-2" responsive striped bordered hover>
                <thead>
                    <tr>
                        <th style={{width: '150px'}}>Resource</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.renderResources()}
                </tbody>
            </Table>
            { /* END table-responsive */}

            <div className="panel-footer">
                <div className="text-right">
                    <Link to="#">View All</Link>
                </div>
            </div>

        </div>
    </Col>
)

export default ResourcesNeeded;
