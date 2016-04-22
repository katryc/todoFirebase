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


    this.itemsRef = myFirebaseRef.child('items');

    this.state = {
      newTodo: '',
      todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row != row2})};

      this.items = [];

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
    backgroundColor: '#64ffda',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 100 ,
  },
});

AppRegistry.registerComponent('todoFirebase', () => todoFirebase);
