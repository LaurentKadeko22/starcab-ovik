import {Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput} from 'react-native';

const Boking = ({navigation}) => {
  return (
    <View > 
      <Text>Boking</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Confirmation" onPress={() => navigation.navigate('Confirmation')} />
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

})