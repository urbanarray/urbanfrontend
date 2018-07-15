import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { styles, headings } from 'assets/styles/variables';

const TeamDisplay = (props) => (
    <Row>
        <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary">
                <div className="panel-heading" style={styles.primaryDark}>
                    <h4 style={headings.tableHeading}>Leadership & Team</h4>
              </div>

                <div className="panel-body">

                    <th> Leadership</th>
                    <div className="row">
                        {props.renderLeadership()}
                    </div>
                    <hr />
                    <th> Team</th>
                    <div className="row">
                        {props.renderTeam()}
                    </div>

                </div>
                <div className="panel-footer">
                    <div className="text-right">
                        <Link to="#" >View All</Link>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
)

export default TeamDisplay;
