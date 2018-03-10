import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

class FormUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
    }

    onDrop (files) {
        // console.log(files);
        this.setState({
            files: files
        });
    }

    createImageItem(file, index){
        return (
            <Col md={3} key={index}>
                <img className="img-responsive" src={file.preview} />
            </Col>
        );
    }

    componentDidMount() { }

    render() {
        let allFiles = this.state.files;
        return (
            <ContentWrapper>
                <Grid className="container-md">
                    <p className="text-center">Dropzone<br/><small>DropzoneJS is an open source library that provides drag&apos;n&apos;drop file uploads with image previews.</small><br/><small className="spr">It’s lightweight, doesn’t depend on any other library (like jQuery) and is</small><small><a href="http://www.dropzonejs.com/" target="_blank"> highly customizable</a></small></p>
                    <Dropzone className="well p-lg" ref="dropzone" onDrop={this.onDrop.bind(this)} >
                        <div className="text-center box-placeholder m0">Try dropping some files here, or click to select files to upload.</div>
                        <div className="mt-lg">
                            {this.state.files.length > 0 ?
                                <Row>{allFiles.map(this.createImageItem)}</Row>
                                :
                                <p><small>This demo does not upload files to any server.</small></p>
                            }
                        </div>
                    </Dropzone>
                </Grid>
            </ContentWrapper>
            );
    }

}

export default FormUpload;
