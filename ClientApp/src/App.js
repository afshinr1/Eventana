import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import './custom.css'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/NotFound' component={NotFound} />
      </Layout>
    );
  }
}
