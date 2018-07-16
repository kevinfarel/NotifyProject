import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View} from 'react-native';

import {StackNavigator} from 'react-navigation';
import Home from './src/components/Home/Home';
import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';

export default class App extends Component
{
  render() {
    return (
      <Home/>
    );
  }
}
