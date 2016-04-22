'use strict'
var React = require('react-native');
var Firebase = require('firebase');
var {

  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} =React;



class todoFirebase extends Component {
  constructor(props){
    super(props);
    var myFirebaseRef = new Firebase('https://glowing-fire-5624.firebaseio.com');

    
  }
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
