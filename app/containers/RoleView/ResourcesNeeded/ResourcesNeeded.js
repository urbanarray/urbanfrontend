import React from 'react';

import { Link } from 'react-router-dom';
import { Col, Table, Panel } from 'react-bootstrap';

import { styles } from '../../../assets/styles/variables';

const ResourcesNeeded = (props) => {

    const renderHeader = () => {
        if (props.resources && props.resources.length) {
            if (props.windowWidth < 600) {
                return null;
            } else {
                return (
                    <thead>
                        <tr>
                            <th style={{ width: '150px' }}>Resource</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                )
            }
        }
    }

    const renderTable = () => {
        if (props.resources && props.resources.length) {
            if (props.windowWidth < 600) {
                return props.resources.map((resource, i) => {
                    return (
                        <Panel bsStyle="primary" key={i}>
                            <Panel.Heading style={{ textAlign: 'center', backgroundColor: 'white', color: 'black' }}>
                                <Panel.Title componentClass="h3">{resource}</Panel.Title>
                            </Panel.Heading>
                            <Link
                                to="#"
                                type="button"
                                className="btn btn-primary btn-xs btn-block"
                                style={[{ marginLeft: '30px' }, styles.primary]}>Details
                            </Link>
                        </Panel>
                    )
                })
            } else {
                return props.resources.map((resource, i) => {
                    return (
                        <tr key={i}>
                            <td>
                                {resource}
                            </td>

                            <td>
                                <Link
                                    to="#"
                                    type="button"
                                    className="btn btn-primary btn-xs btn-block"
                                    style={[{ marginLeft: '30px' }, styles.primary]}>Details
                                </Link>
                            </td>

                        </tr>

                    );
                });
            }
        }
    }

    if (props.windowWidth < 600) {
        return (
            <Col md={4}>
                <div id="panelDemo8" className="panel panel-primary">
                    <div className="panel-heading" style={styles.primaryDark}>
                        All Resources Needed
                    </div>

                        {renderHeader()}
                        {renderTable()}

                    <div className="panel-footer">
                        <div className="text-right">
                            <Link to="#">View All</Link>
                        </div>
                    </div>

                </div>
            </Col>
        )
    } else {
        return (
            <Col md={4}>
                <div id="panelDemo8" className="panel panel-primary">
                    <div className="panel-heading" style={styles.primaryDark}>
                        All Resources Needed
                    </div>

                    <Table id="table-ext-2" responsive striped bordered hover>
                        {renderHeader()}
                        <tbody>
                            {renderTable()}
                        </tbody>
                    </Table>

                    <div className="panel-footer">
                        <div className="text-right">
                            <Link to="#">View All</Link>
                        </div>
                    </div>

                </div>
            </Col>
        )
    }
}

export default ResourcesNeeded;