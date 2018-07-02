import React from 'react';

import { Col, Table, Panel } from 'react-bootstrap';
import { styles } from '../../../assets/styles/variables';

const RoleDisplay = (props) => {

    const renderHeader = () => {
        if (props.windowWidth < 600) {
            return null;
        } else {
            return (
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Date/Time</th>
                    </tr>
                </thead>
            )
        }
    }

    const renderTable = () => {
        if (props.windowWidth < 600) {
            return (
                <Panel bsStyle="primary">
                    <Panel.Heading style={{ textAlign: 'center', backgroundColor: 'white', color: 'black' }}>
                        <Panel.Title componentClass="h3">{props.roleview.roleDetail.role}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body style={{ textAlign: 'center' }}>
                        Project: {props.roleview.roleDetail.project}<br />
                        Date: {props.roleview.roleDetail.date}<br />
                        Time: {`${props.roleview.roleDetail.startTime} - ${props.roleview.roleDetail.endTime}`}<br />
                    </Panel.Body>
                </Panel>
            )
        } else {
            return (
                <tbody>
                    <tr>
                        <td>
                            {props.roleview.roleDetail.project}
                        </td>
                        <td>
                            {`${props.roleview.roleDetail.date} 
                                ${props.roleview.roleDetail.startTime} to ${props.roleview.roleDetail.endTime}`}
                        </td>
                    </tr>
                </tbody>
            )
        }
    }

    if (props.windowWidth < 600) {
        return (
            <Col md={12}>
                <div id="panelDemo8" className="panel panel-primary">
                    <div className="panel-heading" style={styles.primaryDark}>
                        Role: {props.roleview.roleDetail.role}
                    </div>
    
                    {renderHeader()}
                    {renderTable()}
                </div>
            </Col>
        )
    } else {
        return (
            <Col md={12}>
                <div id="panelDemo8" className="panel panel-primary">
                    <div className="panel-heading" style={styles.primaryDark}>
                        Role: {props.roleview.roleDetail.role}
                    </div>
    
                    <Table id="table-ext-2" responsive striped bordered hover>
                        {renderHeader()}
                        {renderTable()}
                    </Table>
                </div>
            </Col>
        )
    }
}

export default RoleDisplay;