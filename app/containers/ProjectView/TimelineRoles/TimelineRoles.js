import React from 'react';

import {Col, Row} from 'react-bootstrap';
import {styles} from '../../../assets/styles/variables';

const TimelineRoles = (props) => (
    <Row>
        <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary">
                <div className="panel-heading" style={styles.primaryDark}>
                    Roles on Timeline
              </div>

                <div className="panel-body">
                    <p>Role 1</p>
                    <p>Role 2</p>
                    <p>Role 3</p>
                </div>
                {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
        </Col>
    </Row>
)

export default TimelineRoles;