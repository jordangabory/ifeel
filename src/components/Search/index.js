import React, {Component}  from 'react';
import  {FormGroup, FormControl, InputGroup , Glyphicon  } from 'react-bootstrap';


class Search extends  Component{
    
    //recuperation  des   valeurs  value
    handleChange(e){
        const title =  e.target.value;
        this.props.updateSearch(title)
    }
    

   
    render(){
        
        return(
            <FormGroup>             
            <InputGroup >
                <FormControl  type="text" placeholder="Search"  className="input-group"  onChange={this.handleChange.bind(this)}/>
                
                <FormControl.Feedback>
                <Glyphicon glyph="search" />
                </FormControl.Feedback>
            </InputGroup>
            </FormGroup>
        )
    }

}


export  default  Search;