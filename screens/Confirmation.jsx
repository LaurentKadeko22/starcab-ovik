import {Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FrontImage2 = require("../assets/frontside.png");


const Confirmation = ({navigation}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.headline}></Text>
      <Image source={FrontImage2} style={styles.image} />
      <Text style={styles.phoneNumber}>Phone Number</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.Textinfo}>Or sign Up with</Text>
        <View style={styles.loginOptions}>
          <Text style={{flex: 1, textAlign: "center"}}>Facebook</Text>
        </View>
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default Confirmation

const styles = StyleSheet.create({
  content:{
    backgroundColor: "#383838",
    height: "100%"
  },

  image: {
    position: "relative",
    left: "10%",
    top: "5%", 
  },
  phoneNumber: {
    position: "relative",
    left: 20,
    top: "30%",
    color: "white",
    fontWeight: 500,
    fontSize: 20
  },
  loginContainer: {
    backgroundColor: "#22272B",
    position: "absolute",
    top: 520,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  Textinfo:{
    textAlign: "center",
    color: "#727272",
    padding: 20,
    fontSize: 20,
    fontWeight: "500"
  },
  loginOptions: {
    width: 80,
    height: 80,
    backgroundColor: "grey",
    left: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
})