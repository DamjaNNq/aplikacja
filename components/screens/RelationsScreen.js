import  React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';


const RelationsScreen = () => { 
  return (
    <View style = {styles1.AppStyle}>
         <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
    </View>
  );
}

export default RelationsScreen

const styles1 = StyleSheet.create({
  AppStyle:{
      flex: 1,
      //padding: 20,
      backgroundColor:'#4D426D' 
  },

})