import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import AppBar from './src/compornents/AppBar';
import MemoListScreen from './src/screens/MemoListScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoListScreen />
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
