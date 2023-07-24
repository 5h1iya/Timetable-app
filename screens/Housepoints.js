import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Announcements extends Component {
  render() {
    return (
       <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"#d1e0b4"}}> House points & strikes </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#db9393", marginLeft: 15, marginRight: 15, marginTop: 20}}> Strikes : 4 </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#78adc4", marginLeft: 15, marginRight: 15, marginTop: 10}}> Housepoints : 121 </Text>
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