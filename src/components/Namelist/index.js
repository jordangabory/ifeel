import React, {Component}  from 'react';
import { DropdownButton , MenuItem , ButtonToolbar,  } from 'react-bootstrap';
import logo from '../../logo.svg';
import Search  from '../Search/index.js';

class Namelist extends  Component{
    constructor(props) {
        super();
        this.state = {
            search: ' ',
        }
    }

    updateSearch(search) {
      this.setState({search});
    }
        
    render(){

        {console.log('test  search', this.state.search )}

        const title= 'Select a channel';
        console.log('  toutes les data' , this.props.data);  

        const {data} = this.props;
        const listbyname= this.props.data[0].category[0].children;
        const listbygenre= this.props.data[0].category[1].children;  
        
        console.log('category  byname', listbyname )
        console.log('category genre ', listbygenre)
        
        const namelist =   data.map(name =>{
            console.log('console  de  tous  la  base  donnée ', name);
            console.log(' console  de  tous les name  et  le   sexe ', name.category[0].name, name.category[1].name )
            return(
                <a>{name.category[0].name} </a>
            )
        })

        const xman =   data.map(name =>{
            console.log('console  de  tous  la  base  donnée ', name);
            console.log(' console  de  tous le name', name.category[0].name, name.category[1].name )
            return(
                <a>{name.category[1].name}</a>
            )
        })

        

        const by = listbyname.map(list =>{
            console.log('console log   des  children ',  list.name)
            return(
                <MenuItem className="white-li">{list.name}</MenuItem>
            )
        })
        
        const li  =  listbygenre.map(list =>{
            console.log('console log   des  children ',  list.name)
            return(
                <MenuItem className="white-li">{list.name}</MenuItem>
            )
        })
        
         {console.log('test  search omp', this.state.search )}
        
        return (
        <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            </div>
            <ButtonToolbar>
            <DropdownButton  title={title} key={title} className="moi" >
                <Search
                    filterVal={this.state.search}
                    updateSearch={this.updateSearch.bind(this)}
                    
                 />
                <MenuItem eventKey="1">{namelist}</MenuItem>
                {by}
                
                <MenuItem eventKey="3">{xman}</MenuItem>
                {li}
            </DropdownButton>
            </ButtonToolbar>
        </div>
        );
    }
}

export default Namelist;