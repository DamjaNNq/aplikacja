import  React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsScreen from './screens/ChatsScreen';
import UsersScreen from './screens/UsersScreen';
import SettingsScreen from './screens/SettingsScreen';
import RelationsScreen from './screens/RelationsScreen';
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();
/*         style:{
  backgroundColor: '#4D426D',
}

style={styles1.TabBar}

  Tab:{
    flex: 1,
    padding: 40,
    //paddingTop: 6,
    paddingBottom: 3,
    backgroundColor:'#4D426D'
},
  TabBar: {
  // bottom: 25,
  // left: 20,
  // right: 20,
  // elevation: 0,
  // borderRadius: 15,
 //  height: 90,
  // backgroundCollor: '#4D426D',
},
*/

//screenOptions={{ headerShown: false}}
const BottomTab = ()  => {
  return (

        <Tab.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4D426D',
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            elevation: 0,
            borderTopWidth: 0,
            backgroundColor: '#4D426D',
            headerBackground: '#4D426D',
            height: 60,
          }
      }}
        >
          
            <Tab.Screen name="Chats" component={ChatsScreen} style={styles1.Tab} options={{
              tabBarIcon: ({focused}) => (
              <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="message-square" size={30} 
                resizeMode='contain'
                style={{
                  color: focused ? '#EFA985' : '#ffffff',
                }}/>
                
              </View>
              ),
              
              }}/>
            <Tab.Screen name="Users" component={UsersScreen} style={styles1.Tab} options={{
              tabBarIcon: ({focused}) => (
              <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="users" size={30} 
                resizeMode='contain'
                style={{
                  color: focused ? '#EFA985' : '#ffffff',

                }}/>
                
              </View>
              ),
              
              }}/>
            <Tab.Screen name="Relations" component={RelationsScreen} style={styles1.Tab} options={{
              tabBarIcon: ({focused}) => (
              <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="plus-square" size={30} 
                resizeMode='contain'
                style={{
                  color: focused ? '#EFA985' : '#ffffff',

                }}/>
                
              </View>
              ),
              
              }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} style={styles1.Tab} options={{
              tabBarIcon: ({focused}) => (
              <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="menu" size={30} 
                resizeMode='contain'
                style={{
                  color: focused ? '#EFA985' : '#ffffff',

                }}/>
                
              </View>
              ),
              
              }}/>
        </Tab.Navigator>
  );
};

export default BottomTab;

const styles1 = StyleSheet.create({


  });