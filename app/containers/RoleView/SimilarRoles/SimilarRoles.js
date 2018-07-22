import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, Table, Panel } from 'react-bootstrap';

import { styles, headings } from 'assets/styles/variables';
import ClaimButton from './ClaimButton';

const SimilarRoles = (props) => {

    const renderHeader = () => {
        if (props.windowWidth < 600) {
            return null;
        } else {
            <thead>
                <tr>
                    <th style={{ width: '200px' }}>Role</th>
                    <th>Description</th>
                    <th>Date/Time</th>
                    <th>Actions</th>
                </tr>
            </thead>
        }
    }

    const renderTable = () => {
        if (props.similarRoles && props.similarRoles.length) {
            if (props.windowWidth < 600) {
                return props.similarRoles.map((similarRole, i) => {
                    return (
                        <Panel bsStyle="primary" key={i}>
                            <Panel.Heading style={styles.primary}>
                                <Panel.Title componentClass="h3" style={headings.subHeading}>{similarRole.role}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body style={{ textAlign: 'center' }}>
                                Description: {similarRole.description}<br />
                                Date: {similarRole.date}<br />
                                Time: {`${similarRole.startTime} - ${similarRole.endTime}`}<br />
                                <ClaimButton similarRole={similarRole}  windowWidth={props.windowWidth}/>
                            </Panel.Body>

                        </Panel>
                    )
                })
            } else {
                return props.similarRoles.map((similarRole, i) => {
                    return (
                        <tr key={i}>
                            <td>{similarRole.role}</td>
                            <td>{similarRole.description}</td>

                            <td>{similarRole.date}<br />
                                {`${similarRole.startTime} - ${similarRole.endTime}`}
                            </td>

                            <td className="col-md-3">

                              <ClaimButton similarRole={similarRole}/>
                            </td>
                        </tr>
                    );
                });
            }
        }
    }

    if (props.windowWidth < 600) {
        return (
            <Row>
                <Col md={12}>
                    <div id="panelDemo8" className="panel panel-primary">
                        <div className="panel-heading" style={styles.primaryDark}>
                            <h4 style={headings.tableHeading}>Similar Roles</h4>
                    </div>

                        {renderHeader()}
                        {renderTable()}

                        <div className="panel-footer">
                            <div className="text-right">
                                <Link to="#" >View All</Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    } else {
        return (
            <Row>
                <Col md={12}>
                    <div id="panelDemo8" className="panel panel-primary">
                        <div className="panel-heading" style={styles.primaryDark}>
                            <h4 style={headings.tableHeading}>Similar Roles</h4>
                    </div>

                        <Table id="table-ext-2" responsive striped bordered hover>
                            {renderHeader()}
                            <tbody>
                                {renderTable()}
                            </tbody>
                        </Table>

                        <div className="panel-footer">
                            <div className="text-right">
                                <Link to="#" >View All</Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default SimilarRoles;
