import {Button, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';


const placeHolderImage = require("../assets/background-image.png");

const frontImage = require("../assets/taxi.png");

const logo = require("../assets/star-cab-logo.png");

const wall = require("../assets/wall.png");

const HomeScreen = ({navigation}) => {
  return (
  
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Image source={placeHolderImage} style={styles.image}/>
      <Image source={frontImage} style={styles.FrontImage}/>
      <Image source={wall} style={styles.wall} />
      <Text style={styles.header}>Behöve du skjuts? Boka taxi nu!</Text>
      <StatusBar style='auto'/>
      <View style={styles.titleContainer}>
      <Button tyle={styles.title}   title="Beställ" onPress={() => navigation.navigate('Boking')} s
      />
      </View>
    </View>
    
  )  
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#383838",
    alignItems: "center",
  },
  image:{
    position: "absolute",
    top: "55%",
    left: "4%"
  },
  FrontImage: {
    position: "absolute",
    bottom: "50%"
  },
  header:{
    width: "40%",
    position: "relative",
    top: "60%",
    color: "white",
    fontSize: 30,
    letterSpacing: 2
  },
  
  logo: {
    position: "absolute",
    top: "5%",
    left: "30%"
  },
  wall:{
    position: "absolute",
    left: "90%"
  },
  titleContainer:{
    position:"absolute",
    top: "80%",
    color:"white",
    backgroundColor: "#E59C0A",
    margin: 20
  }, 
})