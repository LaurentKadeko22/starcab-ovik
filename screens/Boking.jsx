import {Button, StyleSheet, Text, View, Image  } from 'react-native'
import React from 'react'
import { TextInput} from 'react-native';

const baksida = require("../assets/bakside.png")

const Boking = ({navigation}) => {
  return (
    <View style={styles.container} > 
      <Text>Boking</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Confirmation" onPress={() => navigation.navigate('Confirmation')} />
      <View>
        <View style={styles.image}>
        <Image source={baksida} />
        </View>
        <View style={styles.infoContainer}>
          <View>
            
          </View>
        </View>
      </View>
    </View>
  )

}



const TextInputTest =() =>{
  const [text,onChangeText] = react.useState('')
 return (
  <View >
    <Text>
      Boka
    </Text>
    <TextInput 
   
    onChangeText={onChangeNumber}
    value={text}
    placeholder="Ditt namn"
    />

  </View>
 )
}

export default Boking

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#383838",
    height: "100%"
  },
  image:{
    left: 50,
    width: "150"
  },
  infoContainer: {
    backgroundColor: "#22272B",
    position: "relative",
    top: 250,
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  }
})