import React from 'react';

import { Link } from 'react-router-dom';
import { Col, Table } from 'react-bootstrap';
import { styles, headings } from 'assets/styles/variables';

const RolesDisplay = (props) => (
    
    <Col md={12}>
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
                <thead>
                    <tr style={{width: '100%'}}>
                      <th style={{width: '120px'}}>
                        <Link to={"/list-Roles"} style={{float: 'right'}}>See all</Link>
                      </th>
                    </tr>
                </thead> 
            </Table>
            { /* END table-responsive */}
            {/* <div className="panel-footer">Panel Footer</div> */}
        </div>
    </Col>
)

export default RolesDisplay;
