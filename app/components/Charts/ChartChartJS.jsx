import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import ChartChartJSRun from './ChartChartJS.run';

class ChartChartJS extends React.Component {
    componentDidMount() {
        ChartChartJSRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Chart JS</h3>
                <Grid fluid className="container-md">
                    <Row className="mb-lg">
                        <Col lg={ 6 }>
                            <h3 className="mb-lg pv">Line Chart</h3>
                            <div>
                                <canvas id="chartjs-linechart"></canvas>
                            </div>
                        </Col>
                        <Col lg={ 6 }>
                            <h3 className="mb-lg pv">Bar Chart</h3>
                            <div>
                                <canvas id="chartjs-barchart"></canvas>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-lg">
                        <Col lg={ 6 }>
                            <h3 className="mb-lg pv">Polar Area Chart</h3>
                            <div>
                                <canvas id="chartjs-polarchart"></canvas>
                            </div>
                        </Col>
                        <Col lg={ 6 }>
                            <h3 className="mb-lg pv">Radar Chart</h3>
                            <div>
                                <canvas id="chartjs-radarchart"></canvas>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-lg">
                        <Col lg={ 6 }>
                            <h3 className="mb-lg pv">Pie Chart</h3>
                            <div>
                                <canvas id="chartjs-piechart"></canvas>
                            </div>
                        </Col>
                        <Col lg={ 6 }>
                            <h3 className="mb-lg pv">Doughnut Chart</h3>
                            <div>
                                <canvas id="chartjs-doughnutchart"></canvas>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </ContentWrapper>
            );
    }

}

export default ChartChartJS;
