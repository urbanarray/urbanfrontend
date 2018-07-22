import React from 'react';

import { Row, Col, Table, Panel } from 'react-bootstrap';
import { styles, headings } from 'assets/styles/variables';
import { Link } from 'react-router-dom';

const RolesDisplay = (props) => {

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          <th style={{width: '150px'}}>Role</th>
          <th style={{width: '150px'}}>Project </th>
          <th>Date/Time</th>
          <th>PTS</th>
          <th>AC</th>
          <th>Action</th>
        </tr>
      </thead>
    )
  }

  // const returnRoles = () => {
  //   return props.projectview.projectRoles.map((roles) => {
  //     <Panel bsStyle="primary">
  //       this is a panel
  //     </Panel>
  //
  //   })
  // }

  const renderTable = () => {
      if (props.roles && props.roles.length > 0) {
        if (props.windowWidth < 600) {
          return props.roles.map((roles, i) => {
            return (
              <Panel bsStyle="primary" key={i}>
                <Panel.Heading style={styles.primary}>
                  <Panel.Title componentClass="h3" style={headings.subHeading}>{roles.title}</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{ textAlign: 'center' }}>
                  Project: {roles.project} <br />
                  Date: {roles.date}, {`${roles.startTime} - ${roles.endTime}`} <br/>
                  PTS: {roles.pts} <br />
                  AC: {roles.ac} <br />
                  <Link
                    to="/roleView"
                    type="button"
                    className="btn btn-primary btn-sm btn-block"
                    color="default"
                    style={styles.primaryLight}>Details
                  </Link>
                </Panel.Body>
              </Panel>
            )

          })
        } else {
          return props.roles.map((roles) => {
              return (
                <tr key={Math.random()}>
                  <td>
                    {roles.title}
                  </td>

                  <td>
                    {roles.project}
                  </td>

                  <td>
                    {roles.date}<br />
                    {`${roles.startTime} - ${roles.endTime}`}
                  </td>
                  <td>
                    {roles.pts}
                  </td>
                  <td>
                    {roles.ac}
                  </td>
                  <td>
                    <Link
                      to="/roleView"
                      type="button"
                      className="btn btn-primary btn-sm btn-block"
                      color="default"
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
    <Row>
      <Col md={12}>
        <div id="panelDemo8" className="panel panel-primary">
          <div className="panel-heading" style={styles.primaryDark}>
            <h4 style={headings.tableHeading}> Roles </h4>
          </div>

          {renderTable()}

          <div className="panel-footer">
            <div className="text-right">
              <Link to="#">View All</Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    )
  } else {
    return (
      <Col md={12}>
        <div id="paneldemo8" className="panel panel-primary">
          <div className="panel-heading" style={styles.primaryDark}>
            <h4 style={headings.tableHeading}> Roles </h4>
          </div>
          <Table id="table-ext-2" responsive striped bordered hover>
            {renderHeader()}
            <tbody>
              {renderTable()}
            </tbody>
          </Table>
        </div>
      </Col>
    )
  }

}

export default RolesDisplay;
