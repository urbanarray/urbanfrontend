import React from 'react';

import { Col, Row } from 'react-bootstrap';
import {styles} from '../../../../assets/styles/variables'

const HoursWorked = (props) => (
    <Col xs={3} sm={6} lg={3} style={props.windowWidth < 768 ? {padding: '0 0 0 15px'} : null}>
        <div className="panel widget bg-primary green" style={{height: '115px'}}>
            <Row className="row-table">
                {props.windowWidth < 768 ? null : 
                    <Col xs={4} className="text-center pv-lg" style={styles.secondaryDark}>
                        <em className="icon-check fa-3x darkgreen"></em>
                    </Col>
                }
                <Col xs={12} sm={8} className="pv-lg" style={styles.secondary}>
                    <div className="h2 mt0">370
                    </div>
                    <div className="text-uppercase">Hrs</div>
                    {props.windowWidth < 768 ? null : <div className="text-uppercase">Worked</div>}
                </Col>
            </Row>
        </div>
    </Col>
)

export default HoursWorked;

