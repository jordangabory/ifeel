import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DropdownButton, SplitButton, Dropdown , MenuItem ,FormGroup, FormControl, ControlLabel , ButtonToolbar, InputGroup , Glyphicon  } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          search: '',
      }
  }
  
  updateSearch(event) {
      this.setState({search: event.target.value.substr(0, 20)});
  }
  render() {
    const title= 'jordan';
    console.log('  toutes les data' , this.props.data[0].category[0]);  

    const {data} = this.props;
    const listbyname= this.props.data[0].category[0].children;
    const listbygenre= this.props.data[0].category[1].children;  
    console.log('category  byname', listbyname )
    console.log('category genre ', listbygenre)
    const namelist =   data.map(name =>{
      console.log('console  de  tous  la  base  donnée ', name);
      console.log(' console  de  tous les name  et  le   sexe ', name.category[0].name, name.category[1].name )

    })

    const listdata = data.map(list =>{
      console.log('console log de  tous le  tableau  0 ' , list.category[0].children  )
    })

    const by = listbyname.map(list =>{
      console.log('console log   des  children ',  list.name)
    })
    const li  =  listbygenre.map(list =>{
      console.log('console log   des  children ',  list.name)
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ButtonToolbar>
          <DropdownButton  title={title} key={title} >
             <FormGroup>
              <InputGroup>
                <FormControl type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                {console.log('test  search', this.state.search )}
                <InputGroup.Addon>
                  <Glyphicon glyph="search" />
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
            <MenuItem eventKey="1">Genre</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="2">liste par genre</MenuItem>
            <MenuItem eventKey="3">Byname</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Liste Byname</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
