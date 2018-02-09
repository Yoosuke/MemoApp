import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logintitle}> Login </Text>
        <TextInput style={styles.Input} value="Email Address" />
        <TextInput style={styles.Input} value="Password" />
        <TouchableHighlight style={styles.touchbutton} onPress={() => {}} underlayColor='#C71468'>
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableHighlight>
        <Text style={styles.textTitle}>Create a new account.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  Input: {
    backgroundColor: '#eee',
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  logintitle: {
    fontSize: 30,
    marginBottom: 24,
    alignSelf: 'center',
  },
  touchbutton: {
    backgroundColor: '#E31676',
    height: 48,
    width: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  textTitle: {
    color: '#E31676',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 8,
  },
});

export default LoginScreen;
