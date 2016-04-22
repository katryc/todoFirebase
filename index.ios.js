'use strict'
import React, {
  
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} from 'react-native';

class todoFirebase extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>

        </Text>
        <Text style={styles.instructions}>
          Hello from my second React-native APP
        </Text>
        <Text style={styles.instructions}>

        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('todoFirebase', () => todoFirebase);
