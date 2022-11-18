import  React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignIn from '../SignIn_P';


const SettingsScreen = () => { 
  const navigation = useNavigation();
  return (
    <View style = {styles1.AppStyle} > 

      <View>

        <Image source={require('../images/profil.png')}
                          style={styles1.profil}
        />
        <Text style={styles1.name}>
          Wiesław Paleta
        </Text>

        <Text style = {styles1.text}>
          Account</Text>


          <TouchableOpacity 
         onPress={() => { navigation.navigate("SignIn") }}>
          <Text style = {styles1.text}>
              Log Out
          </Text>
          </TouchableOpacity>
      </View>
      
  
    </View>
  );
}

export default SettingsScreen

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
    color: "white",
    fontSize: 20,
    //lineHeight: 21,
    padding: 10,
  },

  AppStyle: {
    flex: 1,
    padding: 20,

    backgroundColor:'#4D426D' 

},



})