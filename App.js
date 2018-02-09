import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MemoEditScreen from './src/screens/MemoEditScreen';
import AppBar from './src/compornents/AppBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoEditScreen />
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
