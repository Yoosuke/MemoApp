import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline value="HI" />
        <CircleButton> {'\uf00C'} </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    flex: 1,
    width: '100%',
    fontSize: 20,
    backgroundColor: '#fff',
    paddingTop: 90,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
});

export default MemoEditScreen;
