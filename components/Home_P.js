import  React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTab';

export default function Home(){
  return (

        <BottomTab/>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
    },
});