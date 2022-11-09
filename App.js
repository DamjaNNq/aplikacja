import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from "react-navigation";
import Home from './components/Home_P';
import SignIn from './components/SignIn_P';
import SignUp from './components/SignUp_P';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}




const styles = StyleSheet.create({
    container: {
        // flex: 1,
        //backgroundColor: '#b803ff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});