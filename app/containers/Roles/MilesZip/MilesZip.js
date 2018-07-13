import React from 'react';
import { Row, Col, FormControl, HelpBlock, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { styles, headings } from '../../../assets/styles/variables';

const MilesZip = ({zip, miles, handleZipChange, handleMilesChange}) => {

  const getValidationState = () => {
    if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip)) return "success";
    else if (length < 5) return "warning";
    else if (length > 5) return "Must return a 5 digit zip code";
    return null;
  }

  return (
    <Col md={6}>
      <form role="form" className="form-inline">

        <DropdownButton
          bsSize="small"
          title={miles + " Miles"}
          id="dropdown-size-extra-small"
          onSelect={(e) => handleMilesChange(e)}
        >
          <MenuItem eventKey="5">5</MenuItem>
          <MenuItem eventKey="15">15</MenuItem>
          <MenuItem eventKey="25">25</MenuItem>
          <MenuItem eventKey="50">50</MenuItem>
          <MenuItem eventKey="100">100</MenuItem>
        </DropdownButton>

        <span style={[{ margin: '0 10px' }, headings.tableHeading]}> From </span>

        <FormGroup
          controlId="formZip"
          validationState={this.getValidationState}
        >
          <FormControl
            type="text"
            value={zip}
            placeholder="Zip"
            onChange={(e) => handleZipChange(e.target.value)}
            style={{ padding: '0', paddingLeft: '5px', marginTop: '10px', height: '30px', maxWidth: '150px', border: 'none' }}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>

      </form>
    </Col>
  )
}

export default MilesZip;