import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/home';
import City from './components/city';
import Profile from './components/profile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={City} />
          <Route path="/city" exact component={City} />
          <Route path="/profile/:id" exact component={Profile} />
          </div>
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
