'use strict';
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
   componentDidMount() {
        this.itemsRef.on('child_added', (dataSnapshot) => {
          this.items.push({id: dataSnapshot.key(), text: dataSnapshot.val()});
          this.setState({
            todoSource: this.state.todoSource.cloneWithRows(this.itmes)
          });
        });

        this.itemsRef.on('child_removed', (dataSnapshot) => {
          this.items = this.items.filter((x) => x.id != dataSnapshot.key());
          this.setState({
            todoSource: this.state.todoSource.cloneWithRows(this.itmes)
          });
        });

   }

   addTodo() {
     if(this.state.newTodo !== '') {
       this.itemsRef.push({
         todo: this.state.newTodo
       });
       this.setState({
         newTodo: ''
       });
     }
   }

   removeTodo() {
     this.itemsRef.child(rowData.id).remove();
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Hello from my second React-native APP
        </Text>
      </View>
    );}
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
