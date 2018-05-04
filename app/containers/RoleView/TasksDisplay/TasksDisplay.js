import React from 'react';

import {Link} from 'react-router-dom';
import {Col, Table} from 'react-bootstrap';

import { styles } from '../../../assets/styles/variables';

const TasksDisplay = (props) => (
    <Col md={8}>
        <div id="panelDemo8" className="panel panel-primary">
            <div className="panel-heading" style={styles.primaryDark}>
                Tasks
              </div>

            { /* START table-responsive */}
            <Table id="table-ext-2" responsive striped bordered hover>
                <thead>
                    <tr>
                        <th style={{width: '150px'}}>Title</th>
                        <th>Description </th>
                        <th style={{width: '120px'}}>Date/Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.renderTasks()}
                </tbody>
            </Table>
            { /* END table-responsive */}

            <div className="panel-footer">
                <div className="text-right">
                    <Link to="#" >View All</Link>
                </div>
            </div>
        </div>
    </Col>
)

export default TasksDisplay;