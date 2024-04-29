import {Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FrontImage2 = require("../assets/frontside.png");

const Confirmation = ({navigation}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.headline}></Text>
      <Image source={FrontImage2} style={styles.image} />
      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  )
}

export default Confirmation

const styles = StyleSheet.create({
  content:{
    backgroundColor: "#383838",
    height: "100%"
  },
  headline:{
    color: "green",
    textAlign: "center"
  },
  image: {
    position: "relative",
    left: "10%",
    top: "5%"
  }
})