import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, useNavigation, useRouter } from "expo-router";
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Boking from './screens/Boking'
import Confirmation from './screens/Confirmation';
import LoginForm from './screens/LoginForm';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
      name='Boking'
      component={Boking}
      />
      <Stack.Screen
      name='Confirmation'
      component={Confirmation}
      />
      <Stack.Screen 
      name='Login'
      component={LoginForm}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
