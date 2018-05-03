import React from 'react';

import {Col} from 'react-bootstrap';

const LocationDisplay = (props) => (
    <Col lg={6}>
        { /* START panel */}
        <div id="panelDemo2" className="panel panel-default panel-demo">
            <div className="panel-heading">

            </div>
            <div className="panel-body text-center">
                <h4>Location</h4>
                <p>
                    {props.projectview.projectView.address}<br />
                </p>

            </div>
        </div>
        { /* END panel */}
    </Col>
)

export default LocationDisplay;