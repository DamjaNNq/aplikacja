import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ChatsPage from './Chats_P';
import CallsPage from './Calls_P';
import UsersPage from './Users_P';
import RelationsPage from './Relations_P';


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
            <Tab.Screen name="ChatsPage" component={ChatsPage}/>
            <Tab.Screen name="Calls" component={CallsPage}/>
            <Tab.Screen name="Users" component={UsersPage}/>
            <Tab.Screen name="Relations" component={RelationsPage}/>

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
