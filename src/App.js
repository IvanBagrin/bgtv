import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";
import './App.css';

import Consult from "./components/Consult/Consult";
import Innovation from "./components/Innovation/Innovation";
import Menu from './components/Menu/Menu';
import Practice from "./components/Practice/Practice";
import Plan from "./components/Plan/Plan";
import Last from "./components/Last/Last";


import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({forceRefresh:true});

class App extends React.Component {
  state = {
    data: null
  }
  componentDidMount() {
    axios.get(`https://bgtv.ru/data/data.json`)
  .then((res) => 
     res.data)
  .then(
    (res) => {
      this.setState({
        data: res
      });
      console.log(this.state.data)
    }
  )
  }
  render() {

  //   document.body.querySelectorAll('a').forEach(item => {
  //     item.addEventListener('click', (event) => {
  //         event.preventDefault();
  //        console.log(event.target.attributes.getNamedItem('href').value)
  //        let href = event.target.attributes.getNamedItem('href').value
  //        history.push(href);
  //     })
  // })


    return (<div className="App">
        <div className="container">
          <Menu />
          <Switch> 
            <Route
              exact
              path="/"
              render={() => <Consult data={this.state.data}/>}
            />
            <Route
              exact
              path="/pratice"
              render={() => <Practice data={this.state.data}/>}
            />
            <Route
              exact
              path="/innovation"
              render={() => <Innovation data={this.state.data}/>}
            />
             <Route
              exact
              path="/plan"
              render={() => <Plan data={this.state.data}/>}
            />
            <Route
              exact
              path="/last"
              render={() => <Last data={this.state.data}/>}
            />
        </Switch>
        </div>
    </div>
    )
  }
}

export default App;
