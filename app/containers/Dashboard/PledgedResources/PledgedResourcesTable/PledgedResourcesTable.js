import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Panel } from 'react-bootstrap';

import { styles, headings } from 'assets/styles/variables';
import DetailsButton from './DetailsButton';
const PledgedResourcesTable = (props) => {

  const renderHeader = () => {
    if (props.windowWidth < 600) {
      return null;
    } else {
      return (
        <thead>
          <tr>
            <th style={{ width: '175px' }}>Item</th>
            <th style={{ width: '175px' }}>Project </th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
        </thead>
      )
    }
  }

  const renderOpenRoles = () => {
    if (props.pledgedResources) {
      if (props.windowWidth < 600) {
        return (
          props.pledgedResources.map((resource, i) => {
            return (
              <Panel bsStyle="primary" key={i}>
                <Panel.Heading style={styles.primary}>
                  <Panel.Title componentClass="h3" style={headings.subHeading}>{resource.item}</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{ textAlign: 'center' }}>
                  Project: {resource.project}<br />
                  Date: {resource.date}<br />
                  Time: {`${resource.startTime} - ${resource.endTime}`}<br />
                  <Link
                    to="/roleView"
                    type="button"
                    className="btn btn-primary btn-block btn-sm"
                    color="default"
                    style={styles.primary}>Details
                    </Link>
                </Panel.Body>
              </Panel>
            )
          })
        )
      } else {
        return (
          props.pledgedResources.map((resource, i) => {
            return (
              <tr key={i}>
                <td>
                  {resource.item}
                </td>
                <td>
                  {resource.project}
                </td>
                <td>
                  {`${resource.startTime} - ${resource.endTime}`}<br />
                  {resource.date}
                </td>

                <td>
                    <DetailsButton item={resource.item}/>
                </td>
              </tr>

            );
          })
        )
      }
    }
  }

  if (props.windowWidth < 600) {
    return(
      <div>
        {renderHeader()}
        {renderOpenRoles()}
      </div>
    )
  } else {
    return (
      <Table id="table-ext-2" responsive striped bordered hover>
        {renderHeader()}
        <tbody>
          {renderOpenRoles()}
        </tbody>
      </Table>
    )
  }
}

export default PledgedResourcesTable;
