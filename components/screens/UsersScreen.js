import  React from 'react';
import { ScrollView, Text, StyleSheet, SafeAreaView, View, ImageBackground } from 'react-native';
import { userlist } from './fakeApi';


export default function Home(){


  return (
    <View style = {styles.AppStyle}>

      <SafeAreaView>
      <ScrollView contentContainerStyle={styles.usersContainer}>
      
      {userlist}
      
      </ScrollView>
      </SafeAreaView>
      </View>
  );
}


const styles = StyleSheet.create({
  AppStyle:{
      flex: 1,
      //padding: 20,
      backgroundColor:'#4D426D' 
  },
  container: {
    flex: 1,
    backgroundColor: '#4D426D',
    
    
  },
  usersContainer:{
    backgroundColor:'#4D426D' 
  },

})