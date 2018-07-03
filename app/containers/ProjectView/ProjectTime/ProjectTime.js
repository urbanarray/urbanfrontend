import React from 'react';

import {Col} from 'react-bootstrap';
import {styles, headings} from '../../../assets/styles/variables';


const ProjectTime = (props) => (
    <Col lg={6}>
        { /* START panel */}
        <div id="panelDemo8" className="panel panel-default panel-demo">
            <div className="panel-heading" style={styles.primaryDark}>
              <h4 style={headings.tableHeading}>Date / Time</h4>
            </div>
            <div className="panel-body text-center">

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
