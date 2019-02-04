import React, { Component } from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Card, H5, FormGroup, InputGroup, Button } from '@blueprintjs/core';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card style={{ width: 400 }}>
          <H5>Register</H5>
          <div className="card-content">
            <FormGroup
              label="First Name"
            >
              <InputGroup placeholder="First Name" />
            </FormGroup>
            <FormGroup
              label="Last Name"
            >
              <InputGroup placeholder="Last Name" />
            </FormGroup>
            <FormGroup
              label="Email"
            >
              <InputGroup type="email" placeholder="Email" />
            </FormGroup>
            <Button fill>Submit</Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default App;
