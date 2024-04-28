import {Button, StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'

const placeHolderImage = require("../assets/background-image.png");

const frontImage = require("../assets/taxi.png");

const logo = require("../assets/star-cab-logo.png");

const wall = require("../assets/wall.png");

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <Button
        title="Go to Boking"
        onPress={() => navigation.push('Boking')}
       />
      <Image source={logo} style={styles.logo} />
      <Image source={placeHolderImage} style={styles.image}/>
      <Image source={frontImage} style={styles.FrontImage}/>
      <Image source={wall} style={styles.wall} />
      <Text style={styles.header}>Behöve du skjuts? Boka taxi nu!
      </Text>

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
  link:{
    position: "relative",
    top: "70%",
    color: "white"
  },
  
  logo: {
    position: "absolute",
    top: "5%"
  },
  wall:{
    position: "absolute",
    left: "90%"
  },
  Button:{
    position:"relative",
    top:"80%"
  }
})