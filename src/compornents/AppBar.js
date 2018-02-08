import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.appber}>
        <View>
          <Text style={styles.appberTitle}>MEBOT</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  appber: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#369',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appberTitle: {
    color: '#fff',
    fontSize: 18,
  },


});

export default AppBar;
