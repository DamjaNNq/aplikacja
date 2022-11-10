import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ChatsPage from './screens/ChatsScreen';
import UsersScreen from './screens/UsersScreen';
import RelationsScreen from './screens/RelationsScreen';
import SettingsScreen from './screens/SettingsScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundcollor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Chats" component={ChatsPage}/>
            <Tab.Screen name="Users" component={UsersScreen}/>
            <Tab.Screen name="Relations" component={RelationsScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>

        </Tab.Navigator>
    );

}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
        }
    }

)
export default Tabs;
