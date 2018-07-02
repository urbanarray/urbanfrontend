import React from 'react';

import { Link } from 'react-router-dom';
import { Col, Table, Panel } from 'react-bootstrap';

import { styles } from '../../../assets/styles/variables';

import DetailsButton from './DetailsButton';
import ResourcesButton from './ResourcesButton';
const TasksDisplay = (props) => {


    const renderHeader = () => {
        if (props.windowWidth < 600) {
            return null;
        } else {
            return (
                <thead>
                    <tr>
                        <th style={{ width: '150px' }}>Title</th>
                        <th>Description </th>
                        <th style={{ width: '120px' }}>Date/Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
            )
        }
    }

    const renderTable = () => {
        if (props.tasks && props.tasks.length) {
            if (props.windowWidth < 600) {
                return props.tasks.map((task, i) => {
                    return (
                        <Panel bsStyle="primary" key={i}>
                            <Panel.Heading style={{ textAlign: 'center', backgroundColor: 'white', color: 'black' }}>
                                <Panel.Title componentClass="h3">{task.title}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body style={{ textAlign: 'center' }}>
                                Description: {task.description}<br />
                                Date: {task.date}<br />
                                Time: {`${task.startTime} - ${task.endTime}`}<br />
                            </Panel.Body>
                            <DetailsButton  task={task} />
                            <ResourcesButton  task={task} />
                        </Panel>
                    )
                })
            } else {
                return props.tasks.map((task, i) => {
                    return (
                        <tr key={i} >
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{`${task.date}`}<br />
                                {`${task.startTime} - ${task.endTime}`}
                            </td>
                            <td>
                                <DetailsButton  task={task} />
                                <ResourcesButton  task={task} />
                            </td>

                        </tr>
                    );
                });
            }
        }

    }

    if (props.windowWidth < 600) {
        return (
            <Col md={8}>
                <div id="panelDemo8" className="panel panel-primary">
                    <div className="panel-heading" style={styles.primaryDark}>
                        Tasks
                  </div>

                    {renderHeader()}
                    {renderTable()}

                    <div className="panel-footer">
                        <div className="text-right">
                            <Link to="#" >View All</Link>
                        </div>
                    </div>
                </div>
            </Col>
        )
    } else {
        return (
            <Col md={8}>
                <div id="panelDemo8" className="panel panel-primary">
                    <div className="panel-heading" style={styles.primaryDark}>
                        Tasks
                  </div>

                    <Table id="table-ext-2" responsive striped bordered hover>
                        {renderHeader()}
                        <tbody>
                            {renderTable()}
                        </tbody>
                    </Table>

                    <div className="panel-footer">
                        <div className="text-right">
                            <Link to="#" >View All</Link>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export default TasksDisplay;
