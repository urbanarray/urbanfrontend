import React from 'react';

import {Col, Table} from 'react-bootstrap';
import { styles, headings } from '../../../assets/styles/variables';

const RolesDisplay = (props) => (
    <Col md={6}>
        <div id="panelDemo8" className="panel panel-primary">
            <div className="panel-heading" style={styles.primaryDark}>
                <h4 style={headings.tableHeading}>Roles</h4>
            </div>

            { /* START table-responsive */}
            <Table id="table-ext-2" responsive striped bordered hover>
                <thead>
                    <tr>
                        <th style={{width: '150px'}}>Role</th>
                        <th style={{width: '150px'}}>Project </th>
                        <th>Date/Time</th>
                        <th>PTS</th>
                        <th>AC</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.renderRoles()}
                </tbody>
            </Table>
            { /* END table-responsive */}
            {/* <div className="panel-footer">Panel Footer</div> */}
        </div>
    </Col>
)

export default RolesDisplay;
