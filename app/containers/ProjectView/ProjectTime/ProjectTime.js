import React from 'react';

import {Col} from 'react-bootstrap';

const ProjectTime = (props) => (
    <Col lg={6}>
        { /* START panel */}
        <div id="panelDemo2" className="panel panel-default panel-demo">
            <div className="panel-heading">
            </div>
            <div className="panel-body text-center">
                <h4>Date / Time</h4>
                <p>
                    {props.projectview.projectView.date}<br />
                    {`${props.projectview.projectView.startTime} - ${props.projectview.projectView.endTime}`}
                </p>


            </div>
        </div>
        { /* END panel */}
    </Col>
)

export default ProjectTime;