import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MemoDetailScreen from './src/screens/MemoDetailScreen';
import AppBar from './src/compornents/AppBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoDetailScreen />
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
