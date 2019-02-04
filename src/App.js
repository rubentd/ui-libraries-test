import React, { Component } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card style={{ width: 400 }}>
          <Card.Content>
            <Card.Header>
              Register
            </Card.Header>
          </Card.Content>
          <Card.Content>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder='email' />
            </Form.Field>
            <Button primary fluid type='submit'>Submit</Button>
          </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
