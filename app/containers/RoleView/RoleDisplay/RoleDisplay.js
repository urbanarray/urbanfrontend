import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Table,
  Button,
  Modal,
  Panel

} from 'react-bootstrap';
import { styles, headings } from '../../../assets/styles/variables';

import ClaimButton from './ClaimButton';

const RoleDisplay = (props) => {

    const renderHeader = () => {
        if (props.windowWidth < 600) {
            return null;
        } else {
            return (
                <thead>
                    <tr>
                        <th style={{ minWidth: '150px' }}>Project</th>
                        <th style={{ minWidth: '250px' }}>Description</th>
                        <th>Date/Time</th>
                        <th>Location</th>
                        <th>Action</th>
                        <th>
                            <Link to={"/list-healthSafety/"+this.props.projectId} style={{float: 'right'}}>See all</Link>
                        </th>
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
                        <Panel.Title componentClass="h3" style={headings.tableHeading}>{props.roleview.roleDetail.role}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body style={{ textAlign: 'center' }}>
                        Project: {props.roleview.roleDetail.project}<br />
                        Description: {props.roleview.roleDetail.description} <br />
                        Location: {props.roleview.roleDetail.location} <br />
                        Date: {props.roleview.roleDetail.date}<br />
                        Time: {`${props.roleview.roleDetail.startTime} - ${props.roleview.roleDetail.endTime}`}<br /><br/>
                        <ClaimButton roleDetail={props.roleview.roleDetail} />
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
                          {props.roleview.roleDetail.description}
                        </td>

                        <td>
                            {`${props.roleview.roleDetail.date}
                                ${props.roleview.roleDetail.startTime} to ${props.roleview.roleDetail.endTime}`}
                        </td>
                        <td>
                          {props.roleview.roleDetail.location}
                        </td>
                        <td>
                          <ClaimButton roleDetail={props.roleview.roleDetail}/>
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
                        <h4 style={headings.tableHeading}>Role: {props.roleview.roleDetail.role}</h4>
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
                        <h4 style={headings.tableHeading}>Role: {props.roleview.roleDetail.role}</h4>
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
