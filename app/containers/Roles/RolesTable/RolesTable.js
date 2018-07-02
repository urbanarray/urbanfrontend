import React from 'react';
import { Table, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { styles, headings } from '../../../assets/styles/variables';

const RolesTable = (props) => {

  const renderHeader = () => {
    if (props.windowWidth < 600) {
      return null;
    } else {
      return (
        <thead>
          <tr>
            <th style={{ width: '200px' }}>Role</th>
            <th style={{ width: '200px' }}>Project </th>
            <th style={{ width: '150px' }}>Date/Time</th>
            <th style={{ width: '80px' }}>Duration</th>
            <th style={{ width: '80px' }}>PTS</th>
            <th>AC</th>
            <th>Action</th>
          </tr>
        </thead>
      )
    }
  }

  const renderOpenRoles = () => {
    if (props.roles) {
      if (props.windowWidth < 600) {
        return (
          props.roles.map((role, i) => {
            return (
              <Panel bsStyle="primary" key={i}>
                <Panel.Heading style={styles.primary}>
                  <Panel.Title componentClass="h3" style={headings.subHeading}>{role.title}</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{ textAlign: 'center' }}>
                  Project: {role.project}<br />
                  Date: {role.date}<br />
                  Time: {`${role.startTime} - ${role.endTime}`}<br />
                  Duration: {role.duration}<br />
                  Pts: {role.pts} | AC: {role.ac}<br />
                  <Link
                    to="/roleView"
                    type="button"
                    className="btn btn-primary btn-block btn-sm"
                    color="default"
                    style={styles.primaryLight}>Details
                  </Link>
                </Panel.Body>
              </Panel>
            )
          })
        )
      } else {
        return (
          props.roles.map((role, i) => {
            return (
              <tr key={i}>
                <td>
                  {role.title}
                </td>
                <td>
                  {role.project}
                </td>
                <td>
                  {`${role.startTime} - ${role.endTime}`}<br />
                  {role.date}
                </td>
                <td>
                  {role.duration}
                </td>
                <td>
                  {role.pts}
                </td>
                <td>
                  {role.ac}
                </td>
                <td>
                  <Link
                    to="/roleView"
                    type="button"
                    className="btn btn-primary btn-block btn-sm"
                    color="default"
                    style={styles.primary}>Details
                      </Link>
                </td>
              </tr>

            );
          })
        )
      }
    }
  }

  return (
    <Table id="table-ext-2" responsive striped bordered hover>
      {renderHeader()}
      {renderOpenRoles()}
    </Table>
  )
}

export default RolesTable;
