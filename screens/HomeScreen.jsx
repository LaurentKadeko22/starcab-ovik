import {Button, StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'

const placeHolderImage = require("../assets/background-image.png")

const frontImage = require("../assets/taxi.png")

const logo = require("../assets/star-cab-logo.png")

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <Button
        title=" Go to Boking" 
        onPress={() => navigation.push('Boking')}
      />

      <Image source={placeHolderImage} style={styles.image}/>
      <Image source={frontImage} style={styles.FrontImage}/>
      <Text style={styles.header}>Behöve du skjuts? Boka taxi nu! Beställ Taxi i Övik</Text>

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
    bottom: "60%"
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
  }
})