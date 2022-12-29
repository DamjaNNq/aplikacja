import  React from 'react';
import { StyleSheet, View, Text, Button, Image,TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather  from 'react-native-vector-icons/Feather'
import AccountScreen from './AccountScreen';
import Signin from '../SignIn_P';

//zmiana ustawien na profilu


function SettingsScreen() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  
  <Stack.Navigator>
  <Stack.Screen name="AccountScreen" component={AccountScreen}/>


</Stack.Navigator>
  return (
    <View style = {styles1.AppStyle} > 

      <View>

        <Image source={require('../images/profil.png')}
                          style={styles1.profil}
        />
        <Text style={styles1.name}>
          
        </Text>
       

    <View style = {styles1.row}>
    <Feather
                        name="power"
                        size={35}
                        color="#EFA985"
                        
                        />
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(Signin)}}
    >

    <Text style = {styles1.text}>
      Log Out
    </Text>
    </TouchableOpacity>
    </View>

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
  row:{
    flexDirection: 'row',
    paddingBottom: 40,
    paddingLeft: 10,
    
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
   // flexDirection: 'row',
    textAlign: 'center',
    fontWeight: '1',
    color: "white",
    fontSize: 25,
    //lineHeight: 21,
    padding: 10,
    //justifyContent: 'center'
    paddingBottom: 100,
  },

  text: {
   // position: 'absolute',
    color: "white",
    fontSize: 20,
    //lineHeight: 21,
    marginLeft:20,
    top:4,
  },

  AppStyle: {
    flex: 1,
    padding: 20,

    backgroundColor:'#4D426D' 

},



})