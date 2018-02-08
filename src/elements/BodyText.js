import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.text}> Hello! </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  text: {
    color: '#000',
    backgroundColor: '#eee',
  },
});

export default BodyText;
