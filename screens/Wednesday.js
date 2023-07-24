import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Funny extends Component {
  render() {
    return (
       <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"#e6e6fa"}}> Wednesday </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#ffa6a6", marginLeft: 15, marginRight: 15, marginTop: 20}}> English </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#fa89ad", marginLeft: 15, marginRight: 15, marginTop: 10}}> Games </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#d6d6d6", marginLeft: 15, marginRight: 15, marginTop: 10}}> P AND R </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#fab689", marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 20}}> Maths </Text>
        <Text> </Text>

         <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#d5f0ed", marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 20}}> Electives </Text>
        <Text> </Text>

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"#5138cf"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100,
    },
  points:{
    fontSize: 20
  },  
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "#5138cf",
    borderRadius: 15,
    backgroundColor:"#e6e6fa",
    margin: 10,
    width: 200,
    height: 50,
  }
})