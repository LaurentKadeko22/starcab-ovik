import {Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Linking } from 'react-native';
import { Link } from 'expo-router';

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
          <Text style={{flex: 1, textAlign: "center", top: "50%"}}>
          </Text>
         </View>
         <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/reg/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzE0NDk1NjI1LCJjYWxsc2l0ZV9pZCI6MzYzOTY5MDQ0ODc4OTI4fQ%3D%3D")}>        
         <Text style={styles.facebook}>facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://accounts.google.com/signup/v2/createaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&parent_directed=true&theme=glif&ddm=0&flowName=GlifWebSignIn&flowEntry=SignUp")}>        
         <Text style={styles.google}>google</Text>
        </TouchableOpacity>
        </View>
        {/* Button to sign in */}
        <TouchableOpacity onPress={() => Linking.openURL("#")}>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
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
  facebook: {
    display: "flex",
    textAlign: "center",
    color: "blue",
    fontSize: 30,
    borderRadius: 20,
  },

  google: {
    color: "blue",
    fontSize: 30,
    textAlign: "center"
  },
  loginButton: {
    position: "relative",
    textAlign: "center",
    top:  450,
    color: "white",
    fontSize: 20,
    textTransform: "uppercase",
    backgroundColor: "#FFBC07",
    width: "50%",
    left: "25%",
    paddingTop: 10,
    paddingBottom: 10,
  }
  
})