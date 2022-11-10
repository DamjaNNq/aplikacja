import  React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsScreen from './screens/ChatsScreen';
import UsersScreen from './screens/UsersScreen';
import SettingsScreen from './screens/SettingsScreen';
import RelationsScreen from './screens/RelationsScreen';
import Feather from 'react-native-vector-icons/Feather'
const Tab = createBottomTabNavigator();

//screenOptions={{ headerShown: false}}
const BottomTab = ()  => {
  return (

        <Tab.Navigator 
        tabBarOptions={{
          showLabel: false,
          style: {
              bottom: 25,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundCollor: '#4D426D',
              borderRadius: 15,
              height: 90,
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
            <Tab.Screen name="Users" component={UsersScreen} />
            <Tab.Screen name="Relations" component={RelationsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
  );
};

export default BottomTab;

const styles1 = StyleSheet.create({
  Tab:
    {
      backgroundCollor: '#4D426D',
    },
  });