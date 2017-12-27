import React, { Component } from 'react';
import {
BrowserRouter,
Route,
Link,
Switch
} from 'react-router-dom'
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    axios.get('/news', {

    }).then(result => {
      console.log(result);
    })
  }

  render() {
      return (
        <div>
        hi!
      </div>
      );
    }
}

export default App;
