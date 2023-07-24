import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Funny extends Component {
  render() {
    return (
       <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"#e6e6fa"}}> Monday </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#e1fae8", marginLeft: 15, marginRight: 15, marginTop: 20}}> Food & Nutrition </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#ffa6a6", marginLeft: 15, marginRight: 15, marginTop: 10}}> English </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#d180ab", marginLeft: 15, marginRight: 15, marginTop: 10}}> PSHE </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#ffd980", marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 20}}> Science </Text>
        <Text> </Text>

         <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#80d19c", marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 20}}> French </Text>
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