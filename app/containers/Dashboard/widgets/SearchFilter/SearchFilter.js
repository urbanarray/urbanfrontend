import React from 'react';

import { Col, Row } from 'react-bootstrap';
import {styles} from '../../../../assets/styles/variables'




const SearchFilter = (props)=>(

  state = {
    search : ""
  }

    <Input label = "Search Roles" icon="search" onChange={this.onchange}/>


)


onchange = e =>{
  this.setState({search: e.target.value});
}

export default SearchFilter;
