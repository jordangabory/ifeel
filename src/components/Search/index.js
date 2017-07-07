import React, {Component}  from 'react';
import  { DropdownButton, SplitButton, Dropdown , MenuItem ,FormGroup, FormControl, ControlLabel , ButtonToolbar, InputGroup , Glyphicon  } from 'react-bootstrap';


class Search extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    updateSearch(event) {
      this.setState({search: event.target.value.substr(0, 20)});
    }

    render(){
        return(
            <FormGroup>
            <InputGroup>
                <FormControl type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                {console.log('test  search', this.state.search )}
                <InputGroup.Addon>
                <Glyphicon glyph="search" />
                </InputGroup.Addon>
            </InputGroup>
            </FormGroup>
        )
    }

}


export  default  Search