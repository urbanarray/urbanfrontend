import React, {Component} from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import {styles} from '../../../../assets/styles/variables'
import moment from 'moment/src/moment';

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: moment(),
            intervalID: ""
        };
    }


    componentDidMount() {
        this.timerID = setInterval(this.setTime.bind(this), 1000);
    }

    setTime() {
        this.setState({
            intervalID: this.timerID,
            date: moment()
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    }

    render() {
        return(
            <Col lg={3} md={6} sm={12}>
                <div className="panel widget green">
                    <Row className="row-table">
                        <Col xs={4} className="text-center pv-lg" style={styles.secondaryDark}>
                            <div data-now="" data-format="D" className="h2 mt0"></div>
                            
                            {/* https://momentjs.com/ */}
                            
                            <div className="h4">{this.state.date.format("MMMM")}</div>
                            <div className="h4">{this.state.date.format("Do")}</div>

                        </Col>
                        <Col xs={8} className="pv-lg" style={styles.secondary}>

                            <div className="h2 mt0">{this.state.date.format("dddd")}</div>
                            <div className="text-uppercase">{this.state.date.format("h:mm:ss a")}</div>

                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }
    
}

export default Clock;