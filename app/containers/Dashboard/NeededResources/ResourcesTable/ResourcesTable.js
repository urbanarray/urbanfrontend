import React from 'react';
import { Table, Panel } from 'react-bootstrap';

import { styles, headings } from 'assets/styles/variables';
import ClaimButton from './ClaimButton';
import ReactTooltip from 'react-tooltip';
const ResourcesTable = (props) => {

    const renderHeader = () => {
        if (props.windowWidth < 600) {
            return null;
        } else {
            return (
                <thead>
                    <tr>
                        <th style={{ width: '150px' }}>Item</th>
                        <th style={{ width: '100px' }}>Quantity </th>
                        <th style={{ width: '150px' }}>Project</th>
                        <th style={{ width: '150px' }}>Location Needed</th>
                        <th>Date/Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
            )
        }
    }

    const renderTable = () => {
        if (props.neededResources) {
            if (props.windowWidth < 600) {
                return (
                    props.neededResources.map((resource, i) => {
                        return (
                            <Panel bsStyle="primary" key={i}>
                                <Panel.Heading style={styles.primary}>
                                    <Panel.Title componentClass="h3" style={headings.subHeading}>{resource.name}</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body style={{ textAlign: 'center' }}>
                                    Project: {resource.project}<br />
                                    Location: {resource.locationNeeded}
                                    Date: {resource.date}<br />
                                    Time: {`${resource.startTime} - ${resource.endTime}`}<br />
                                    <ClaimButton windowWidth={props.windowWidth}/>
                                </Panel.Body>
                            </Panel>
                        )
                    })
                )
            } else {
                return props.neededResources.map((resource, i) => {
                    return (
                        <tr key={i}>
                            <td data-tip={resource.name}>
                                {resource.name}
                            </td>

                            <td>
                                {resource.quantity}
                            </td>
                            <td>
                                {resource.project}
                            </td>
                            <td>
                                {resource.locationNeeded}
                            </td>
                            <td>
                                {`${resource.startTime} - ${resource.endTime}`}<br />
                                {resource.date}
                            </td>
                            <td>
                                <ClaimButton />
                            </td>
                        </tr>

                    );
                });
            }
        }
    }

    if (props.windowWidth < 600) {
        return(
            <div>
                {renderHeader()}
                {renderTable()}
            </div>
        )
    } else {
        return (
          <div>
            <Table id="table-ext-2" responsive striped bordered hover>
                {renderHeader()}
                <tbody>
                    {renderTable()}
                </tbody>

            </Table>
            <ReactTooltip />
          </div>
        )
    }
}

export default ResourcesTable;
