import  React from 'react';
import { StyleSheet, View, Text, Button, Image,TouchableOpacity, Pressable } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../SignIn_P';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather  from 'react-native-vector-icons/Feather'
//import AccountScreen from './AccountScreen';



function AccountScreen({ navigation }) {
  return (
    <View style = {styles1.AppStyle} > 

      <View>

        <Image source={require('../images/profil.png')}
                          style={styles1.profil}
        />
        <Text style={styles1.name}>
          Wiesław Paleta
        </Text>
        <Pressable
      title="Go somewhere"
      onPress={() => {
       navigation.navigate('AccountScreen', { screen: 'AccountScreen' });
      }}
    >
            <MaterialCommunityIcons
                        name="account"
                        size={30}
                        color="#EFA985"
                       
                        />
    <Text style = {styles1.text}>
      Account
    </Text>
    </Pressable>
    <Feather
                        name="power"
                        size={30}
                        color="#EFA985"
                       
                        />
    <TouchableOpacity
      title="Go somewhere"
      onPress={() => {
        navigation.navigate('SignIn', { screen: 'SignIn' });
      }}
    >
            
    <Text style = {styles1.text}>
      Log Out
    </Text>
    </TouchableOpacity>


      </View>
      
  
    </View>
  );
}

export default AccountScreen

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent: 'center',
   backgroundColor: 'red',

  },

  profil: {
    borderRadius: 100,
    position: 'relative',
    marginTop: 120,
    alignSelf: 'center',
    width: 125,
    height: 125,
  },

  name:{
    textAlign: 'center',
    fontWeight: '1',
    color: "white",
    fontSize: 25,
    //lineHeight: 21,
    padding: 10,
  },

  text: {
    position: 'absolute',
    color: "white",
    fontSize: 20,
    //lineHeight: 21,
    marginLeft: 45,
  },

  AppStyle: {
    flex: 1,
    padding: 20,

    backgroundColor:'#4D426D' 

},



})