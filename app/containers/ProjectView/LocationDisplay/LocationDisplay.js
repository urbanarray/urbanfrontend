import React from 'react';

import {Col} from 'react-bootstrap';
import {createStructuredSelector} from 'reselect';
import projectId from '../selectors';
import injectReducer from 'utils/injectReducer';
import reducer from '../reducer';
import {compose} from 'redux';


export default class LocationDisplay extends React.Component {

    constructor(props){
        super(props);
    }


    render() {
            return (
                <Col lg={6}>
                    { /* START panel */}
                    <div id="panelDemo2" className="panel panel-default panel-demo">
                        <div className="panel-heading">

                        </div>
                        <div className="panel-body text-center">
                            <h4>Location</h4>
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

