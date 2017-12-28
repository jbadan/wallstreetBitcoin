import React, { Component } from 'react';
import {
BrowserRouter,
Route,
Link,
Switch
} from 'react-router-dom'
import './App.css';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Articles from './Articles';

const style = {
  width: "50%",
  margin: 20,
};


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
    }
  }

  componentDidMount(){
    axios.get('/news', {

    }).then(result => {
      console.log(result);
      this.setState({
        articles: result.data.articles
      })
    })
  }

  render() {
      return (
        <Grid fluid>
          <Row>
            <Col xs>
              <Articles />
            </Col>
          </Row>
      </Grid>
      );
    }
}

export default App;
