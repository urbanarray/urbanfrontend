import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {styles} from '../../../assets/styles/variables';
import ReactQuill from 'react-quill';
import styled from "styled-components";




import 'react-quill/dist/quill.snow.css';

const Textquill = styled.div`

.ql-toolbar {
    display: none;
}

.ql-editor {
    border-top: 1px solid #ccc;
    
}

`;

export default class ProjectDetails extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            formats: [
                null,
                'bold', 'italic', 'underline', 'strike', 'blockquote',
                'list', 'bullet', 'indent',
                'link', 'image'
            ]
        }
    }


    render(){
        
        return (
            <Col md={6}>
                <div id="panelDemo8" className="panel panel-primary">
                    <div className="panel-heading" style={styles.primaryDark}>
                        Project: {(this.props.projectDetail.name)}
                    </div>
    
                    <div className="panel-body">
    
                        <div className="row">
    
                            <div className="col-md-12">
                                <h4>Project Description</h4>
                                 {(this.props.projectDetail.description)}
                                {/* <p>{this.props.projectview.projectDetail.description} </p> */}
                                <br />
                                <br />
                                    <h4>Project Goals</h4>
                                <Textquill>
                                    <ReactQuill
                                        name="react_quill"
                                        value={this.props.projectDetail.pgoals}
                                        readOnly
                                        formats={this.formats}
                                        />
                                </Textquill>
                                <br />
                                <br />
    
                                <Row>
                                    <hr />
                                    <Col md={6}>
                                        
                                    </Col>
                                    <Col md={6}>
                                        {/* {console.log(this.props.projectId)} */}
                                        
                                        
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