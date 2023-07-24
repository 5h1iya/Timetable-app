import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Announcements extends Component {
  render() {
    return (
       <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"#d1e0b4"}}> Announcements </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#adb3b1", marginLeft: 15, marginRight: 15, marginTop: 20}}> Year 8 assembly on Thursday Week A </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#88b381", marginLeft: 15, marginRight: 15, marginTop: 10}}> Denton Assembly Monday week B </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#a3d5d6", marginLeft: 15, marginRight: 15, marginTop: 10}}> IOW lost property to be collected </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#fc6d6f", marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 20}}> Last date to collect lost property is 20th July </Text>
        <Text> </Text>

         <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#fce96d", marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 20}}> Have a nice summer ! </Text>
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