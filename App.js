import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home_P';
import SignIn from './components/SignIn_P';
import SignUp from './components/SignUp_P';
import cwel from flex;
import BottomTab from './components/BottomTab';



const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>

            <Stack.Screen name="HomePage" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

//            <Stack.Screen name="SignIn" component={SignIn} />
//<Stack.Screen name="SignUp" component={SignUp} />


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b803ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});