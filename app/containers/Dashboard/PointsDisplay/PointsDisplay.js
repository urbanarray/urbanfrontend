import React from 'react';

import { Col, Row } from 'react-bootstrap';
import {styles} from '../../../assets/styles/variables'

const PointsDisplay = (props) => (
    <Col lg={3} sm={6}>
        { /* START widget */}
        <div className="panel widget green" style={{color: 'white'}}>
            <Row className="row-table">
                <Col xs={4} className="text-center pv-lg" style={styles.secondaryDark}>
                    <em className="icon-heart fa-3x"></em>
                </Col>
                <Col xs={8} className="pv-lg" style={styles.secondary}>
                    <div className="h2 mt0">4,255
                    </div>
                    <div className="text-uppercase">Karma</div>
                    <div className="text-uppercase">PTS</div>
                </Col>
            </Row>
        </div>
    </Col>
)

export default PointsDisplay;