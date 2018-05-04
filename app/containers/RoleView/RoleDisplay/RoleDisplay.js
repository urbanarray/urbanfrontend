import React from 'react';

import { Col, Table } from 'react-bootstrap';

const RoleDisplay = (props) => {
    console.log(props);
    return (
        <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary">
                <div className="panel-heading">
                    Role: {props.roleview.roleDetail.role}
                </div>

                { /* START table-responsive */}
                <Table id="table-ext-2" responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Date/Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {props.roleview.roleDetail.project}
                            </td>
                            <td>
                                {props.roleview.roleDetail.date + ' ' + props.roleview.roleDetail.startTime + ' to ' + this.props.roleview.roleDetail.endTime}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                { /* END table-responsive */}

                {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
        </Col>
    )
}

export default RoleDisplay;