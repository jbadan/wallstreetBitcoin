import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

const style = {
  width: "50%",
  margin: 20,
};

class Articles extends Component {
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
            <Paper style={style} zDepth={3}>
              <List>
              {this.state.articles.map((article, index) => {
                return(
                  <div key={index}>
                    <ListItem
                        key={index}
                        value={article}
                        primaryText={article.title}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                              <ListItem
                                key={1}
                                primaryText={article.author}
                              />,
                            <ListItem
                              key={2}
                              primaryText={article.description}
                            />,
                            <ListItem
                              key={3}
                              primaryText={article.source.name}
                            />,
                            <ListItem
                              key={4}
                              primaryText={article.url}
                            />,
                          ]}
                      />
                    </div>
                  )})}
              </List>
          </Paper>
      );
    }
}

export default Articles;
