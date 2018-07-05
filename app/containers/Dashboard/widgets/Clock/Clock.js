import React, {Component} from 'react';

import { Row, Col } from 'react-bootstrap';
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
            <Col xs={3} sm={6} lg={3} style={this.props.windowWidth < 768 ? {padding: '0 15px 0 0'} : null}>
                <div className="panel widget green" style={{height: "115px"}}>
                    <Row className="row-table">
                        {this.props.windowWidth < 768 ? null : 
                            <Col sm={4} className="text-center pv-lg" style={styles.secondaryDark}>


                            {/* https://momentjs.com/ */}

                            <div className="h4">{this.state.date.format("MMMM")}</div>
                            <div className="h4">{this.state.date.format("Do")}</div>

                            </Col>}
                        <Col xs={12} sm={8} className="pv-lg" style={styles.secondary}>

                            <div className="h2 mt0">{this.state.date.format("ddd")}</div>
                            <div className="text-uppercase">{this.state.date.format("h:mm:ss a")}</div>

                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }

}

export default Clock;
