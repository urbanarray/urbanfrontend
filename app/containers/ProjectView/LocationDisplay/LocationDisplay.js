import React from 'react';

import {Col} from 'react-bootstrap';
import {createStructuredSelector} from 'reselect';
import projectId from '../selectors';
import injectReducer from 'utils/injectReducer';
import reducer from '../reducer';
import {compose} from 'redux';
import {styles, headings} from '../../../assets/styles/variables';



export default class LocationDisplay extends React.Component {

    constructor(props){
        super(props);
    }


    render() {
            return (
                <Col lg={6}>
                    { /* START panel */}
                    <div id="panelDemo8" className="panel panel-default panel-demo">
                        <div className="panel-heading" style={styles.primaryDark}>
                          <h4 style={headings.tableHeading}>Location</h4>
                        </div>
                        <div className="panel-body text-center">

                            <p>
                                {this.props.location.name.toUpperCase()}
                            </p>

                        </div>
                    </div>
                    { /* END panel */}
                </Col>
            )
    }
}
