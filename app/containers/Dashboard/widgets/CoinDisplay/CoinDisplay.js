import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { styles } from 'assets/styles/variables';

const CoinDisplay = (props) => (
    <Col xs={3} sm={6} lg={3} style={props.windowWidth < 768 ? {padding: '0'} : null}>
        <div className="panel widget green">
            <Row className="row-table">
                {props.windowWidth < 768 ? null :
                    <Col xs={4} className="text-center pv-lg" style={styles.secondaryDark}>
                        <em className="icon-disc fa-3x"></em>
                    </Col>
                }
                <Col xs={12} sm={8} className="pv-lg" style={styles.secondary}>
                    <div className="h2 mt0">84</div>
                    <div className="text-uppercase">Array</div>
                    <div className="text-uppercase">Coins</div>
                </Col>
            </Row>
        </div>
    </Col>
)

export default CoinDisplay;