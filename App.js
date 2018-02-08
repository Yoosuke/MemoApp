import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from './src/compornents/AppBar';
import MemoList from './src/compornents/MemoList';
import CircleButton from './src/elements/CircleButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <AppBar />
        <MemoList />
        <CircleButton>+</CircleButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF5',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
