import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {styles} from '../../../assets/styles/variables';

export default class ProjectDetails extends React.Component {
    
    constructor(props){
        super(props)
    }

    render(){
        
        return (
            <Col md={6}>
                <div id="panelDemo8" className="panel panel-primary">
                    <div className="panel-heading" style={styles.primaryDark}>
                        Project: {(this.props.projectview.projectDetail.name)}
                    </div>
    
                    <div className="panel-body">
    
                        <div className="row">
    
                            <div className="col-md-12">
                                <h4>Project Description</h4>
                                <p>{this.props.projectview.projectDetail.description} </p>
                                <br />
                                <br />
                                <h4>Project Goals</h4>
                                {this.props.renderProjectGoals()}
                                <br />
                                <br />
    
                                <Row>
                                    <hr />
                                    <Col md={6}>
                                        <Link
                                            to="/projectView"
                                            type="button"
                                            className="btn btn-primary btn-block"
                                            style={styles.primary}>Communication
                                        </Link>
                                        <Link
                                            to="/projectView"
                                            type="button"
                                            className="btn btn-success btn-block"
                                            style={styles.secondary}>Documentation
                                        </Link>
    
                                    </Col>
                                    <Col md={6}>
                                        <Link
                                            to="/projectView"
                                            type="button"
                                            className="btn btn-success btn-block"
                                            style={styles.secondary}>Execution
                                        </Link>
                                        <Link
                                            to="/projectView"
                                            type="button"
                                            className="btn btn-primary btn-block"
                                            style={styles.primary}>AEO/Safe/Weath
                                        </Link>
                                    </Col>
                                </Row>
    
                            </div>
    
                        </div>
                    </div>
                    {/* <div className="panel-footer">Panel Footer</div> */}
                </div>
            </Col>
        )
    }
}