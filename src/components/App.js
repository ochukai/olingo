import React, { Component } from 'react';
import { Button, Icon, Label, Header } from 'semantic-ui-react'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header as='h2' icon>
          <Icon name='settings' />
          Account Settings
          <Header.Subheader>Manage your account settings and set e-mail preferences.</Header.Subheader>
        </Header>
        <div>
          <Button as='div' labelPosition='right'>
            <Button color='red'>
              <Icon name='heart' />
              Like
            </Button>
            <Label as='a' basic color='red' pointing='left'>
              2,048
            </Label>
          </Button>
          <Button as='div' labelPosition='right'>
            <Button basic color='blue'>
              <Icon name='fork' />
              Fork
            </Button>
            <Label as='a' basic color='blue' pointing='left'>
              2,048
            </Label>
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
