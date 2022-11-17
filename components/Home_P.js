import  React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTab';

export default function Home(){
  return (

        <BottomTab
        style={styles1.container}
        />
  );
}

const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        //paddingTop: 6,
        paddingBottom: 3,
        backgroundColor:'#4D426D'
    },
});