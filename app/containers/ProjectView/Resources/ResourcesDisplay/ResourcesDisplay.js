// THIS COMPONENT IS NOT BEING USED ANYWHERE - eventually delete

import React from 'react';

import { Row, Col, Table, Panel } from 'react-bootstrap';
import { styles, headings } from 'assets/styles/variables';

const ResourcesDisplay = () => {
  // copying from dashboard resources table because that works responsively
  const renderHeader = () => {
    if (props.windowWidth < 600) {
      return null;
    } else {
      return (
        <thead>
          <tr>
            <th style={{width: '150px'}}> Item </th>
            <th style={{width: '150px'}}> Quantity </th>
            <th style={{width: '150px'}}> Location Needed </th>
            <th style={{width: '150px'}}> Date/Time </th>
            <th style={{width: '150px'}}> Action </th>
          </tr>
        </thead>
      )
    }
  }

  const renderTable = () => {
    if (props.resources) {
      if (props.windowWidth < 600) {
        return (
          props.resources.map((resource, i) => {
            <Panel bsStyle="primary" key={i}>
              <Panel.Heading style={styles.primary}>
                <Panel.Title componentClass="h3" style={headings.subHeading}>{resource.name}</Panel.Title>
              </Panel.Heading>
              <Panel.Body style={{ textAlign: 'center'}}>
                Quantity: {resource.quantity} <br />
                Location Needed: {resource.locationNeeded} <br />
                Date: {resource.date} <br />
                Time: {`${resource.startTime} - ${resource.endTime}`}
                <Link
                  to="/projectView"
                  type="button"
                  className="btn btn-success btn-block btn-sm"
                  style={styles.primaryLight}>Details/Claim
                </Link>
              </Panel.Body>
            </Panel>
          })
        )
      } else {
        return props.resources.map((resource) => {
          return (
            <tr key={Math.random()}>
              <td>
                {resource.name}
              </td>

              <td>
                {resource.quantity}
              </td>
              <td>
                {resource.locationNeeded}
              </td>
              <td>
                {resource.date}<br />
                {`${resource.startTime} - ${resource.endTime}`}
              </td>
              <td>
                {/* <button type="button" className="btn btn-primary btn-block btn-sm"  > Pledge </button> */}
                <Link
                  to="/projectView"
                  type="button"
                  className="btn btn-success btn-block btn-sm"
                  style={styles.primaryLight}>Details/Claim
                </Link>
              </td>
            </tr>
          );
        })
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
      </div>
    )
  }
}

export default ResourcesDisplay;
