import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Panel } from 'react-bootstrap';

import { styles } from '../../../assets/styles/variables';

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
                <Panel.Heading style={{textAlign: 'center', backgroundColor: 'white', color: 'black'}}>
                  <Panel.Title componentClass="h3">{role.role}</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{ textAlign: 'center' }}>
                  Project: {role.project}<br />
                  Date: {role.date}<br />
                  Time: {`${role.startTime} - ${role.endTime}`}<br />
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
        return props.yourRoles.map((roleInfo, i) => {
          return (
            <tr key={i}>
              <td>
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

  return (
    <Table id="table-ext-2" responsive striped bordered hover>
      {renderHeader()}
      {renderTable()}
    </Table>
  )
}

export default YourRoleTable;