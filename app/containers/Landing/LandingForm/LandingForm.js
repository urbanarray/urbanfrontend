import React from 'react';

import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

function printErrors(errors) {
    if (errors.length > 0) {
        return errors.map((error) => {
            return <p key ={Math.random()} style={{color:'red'}}  > {error.message} </p>
        });
    }
}


const LandingForm = (props) => {
    return (
        <form onSubmit={(e) => props.handleSubmit(e)}>
            <FormGroup
                controlId="formBasicText"
                validationState={props.getValidationState()}
            >
                <ControlLabel></ControlLabel>
                <FormControl
                    type="text"
                    value={props.state.value}
                    placeholder="Enter Passphrase"
                    onChange={props.handleChange}
                />
                <FormControl.Feedback />
                {printErrors(props.errors)}
                <HelpBlock>{props.state.value.length < 6 || props.state.value.length > 6 ?
                    `Code needs to be exactly 6 characters` : `Looks good`}</HelpBlock>
                <p style={{ color: 'red' }}>{props.state.message}</p>
            </FormGroup>
            <Button type="submit">Submit Passphrase</Button>
        </form>
    )
}

export default LandingForm;