import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingCart from './ShoppingCart';
import {Provider} from 'react-redux';
import Store from './store/index';

class App extends Component {
  render(){
  return (
    <Provider store={Store}>
    <ShoppingCart />
    </Provider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;