import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.MemoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
              <Text style={styles.memoHeaderDate}>2018/02/09</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>
            講座のアイデアです。
          </Text>
        </View>

        <CircleButton color="white" style={styles.edditButton}>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 78,
    flex: 1,
    width: '100%',
  },
  MemoHeader: {
    height: 80,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 20,
  },
  edditButton: {
    top: 135,
  },
});

export default MemoDetailScreen;
