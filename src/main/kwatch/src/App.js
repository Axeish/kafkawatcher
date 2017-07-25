import React, { Component } from 'react';
import { Checkbox, TextArea, Table, Form, Modal, Divider, Icon, Extra, Container, Header, Grid, Content, Button,  Input, Menu, Segment, Card, Group, Item, Image, Description} from 'semantic-ui-react'

import logo from './logo.svg';
import './App.css';
import Klist from  './component/Klist';
import Filterlist from  './component/Filterlist';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filtertext: 'game:g3'
        }
    }

  filterupdate(value){
        this.setState({filtertext:value})
  }

  render() {
      console.log("we are here: App");
      return(
          <div className="App">

              <div className="App-header">
              <h2>KafkaWatcher</h2><Button>Start</Button><Button>Stop</Button>
                  <br/> <p>not implemented</p>
              </div>
              <Filterlist filtertext={this.state.filtertext}
                          filterupdate={this.filterupdate.bind(this)}
              />
              (currently reading from a local js file. Next step is to modify this file with kafka consumer)
              <Klist data = {this.props.data}
                      filtertext = {this.state.filtertext}
              />
          </div>
      )

  }
}

export default App;
