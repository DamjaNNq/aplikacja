import  React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Home(){
  return (
    <View style = {styles1.AppStyle}>
      <Text>
       Users
      </Text>
    </View>
  );
}


const styles1 = StyleSheet.create({
  AppStyle:{
      flex: 1,
      //padding: 20,
      backgroundColor:'#4D426D' 
  },

})