import React, {Component}  from 'react';
import  { DropdownButton, SplitButton, Dropdown , MenuItem ,FormGroup, FormControl, ControlLabel , ButtonToolbar, InputGroup , Glyphicon  } from 'react-bootstrap';


class Search extends  Component{
    
    handleChange(e){
        const title =  e.target.value;
        this.props.updateSearch(title)
    }
    

   
    render(){
        const { filterVal, updateSearch} = this.props
        return(
            <FormGroup>
            <InputGroup type="text" placeholder="Search"    onChange={this.handleChange.bind(this)}>
                <FormControl  />
                
                <InputGroup.Addon>
                <Glyphicon glyph="search" />
                </InputGroup.Addon>
            </InputGroup>
            </FormGroup>
        )
    }

}


export  default  Search;