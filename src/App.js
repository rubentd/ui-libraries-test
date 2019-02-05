import React, { Component } from 'react';
import { Card, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card title="Register" style={{ width: 400 }}>
          <Form>
            <Form.Item label="First Name">
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item label="Last Name">
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item label="Email">
              <Input type="Email" placeholder="Email" />
            </Form.Item>
            <Button type="primary" block>
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default App;
