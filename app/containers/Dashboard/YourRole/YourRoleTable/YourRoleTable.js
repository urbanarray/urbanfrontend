import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Panel } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';

import { styles, headings } from 'assets/styles/variables';

const YourRoleTable = (props) => {

  const renderHeader = () => {
    if (props.windowWidth < 600) {
      return null;
    } else {
      return (
        <thead>
          <tr>
            <th style={{ width: '175px' }}>Role</th>
            <th style={{ width: '175px' }}>Project </th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
        </thead>
      )
    }
  }

  const renderTable = () => {
    if (props.yourRoles) {
      if (props.windowWidth < 600) {
        return (
          props.yourRoles.map((role, i) => {
            return (
              <Panel bsStyle="primary" key={i}>
                <Panel.Heading style={styles.primary}>
                  <Panel.Title componentClass="h3" style={headings.subHeading}>{role.role}</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{ textAlign: 'center' }}>
                  Project: {role.project}<br />
                  Date: {role.date}<br />
                  Time: {`${role.startTime} - ${role.endTime}`}<br />
                  <Link
                    to="/roleView"
                    type="button"
                    className="btn btn-block btn-sm"
                    color="default"
                    style={styles.primaryLight}>Details
                        </Link>
                </Panel.Body>
              </Panel>
            )
          })
        )
      } else {
        return props.yourRoles.map((roleInfo, i) => {
          return (
            <tr key={i}>
              <td data-tip={roleInfo.project}>
                {roleInfo.role}
              </td>

              <td>
                {roleInfo.project}
              </td>
              <td>
                {`${roleInfo.startTime} - ${roleInfo.endTime}`} <br />
                {roleInfo.date}
              </td>

              <td>
                <Link
                  to="/roleView"
                  type="button"
                  className="btn btn-primary btn-xs btn-block"
                  style={styles.primary}>Details
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

export default YourRoleTable;
