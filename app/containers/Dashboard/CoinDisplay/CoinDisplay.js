import React from 'react';

import { Col, Row } from 'react-bootstrap';

const CoinDisplay = (props) => (
    <Col lg={3} md={6} sm={12}>
        { /* START widget */}
        <div className="panel widget green" style={{ color: 'white' }}>
            <Row className="row-table">
                <Col xs={4} className="text-center darkgreen pv-lg">
                    <em className="icon-disc fa-3x"></em>
                </Col>
                <Col xs={8} className="pv-lg">
                    <div className="h2 mt0">84</div>
                    <div className="text-uppercase">Array</div>
                    <div className="text-uppercase">Coins</div>
                </Col>
            </Row>
        </div>
    </Col>
)

export default CoinDisplay;