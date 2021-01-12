import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from '../service/NavigationService';
import { createStackNavigator } from '@react-navigation/stack';
import Chats from '../screens/Chats/Chats';
import Status from '../screens/Status/Status';
import Calls from '../screens/Calls/Calls';
import ChatView from '../screens/Chats/ChatView';
import ChatsIcon from '../resources/icons/ChatsIcon';
import StatusIcon from '../resources/icons/StatusIcon';
import CallsIcon from '../resources/icons/CallsIcon';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const TabNavigator = () => {
   return (
      <Tab.Navigator
         initialRouteName={'Chats'}
         tabBarOptions={{
            activeTintColor: 'rgb(15,94,85)',
            inactiveTintColor: 'gray'
         }}>
         <Tab.Screen
            name={'Chats'}
            component={Chats}
            options={{
               title: 'Sohbetler',
               tabBarIcon: ({ focused, size }) => (
                  <ChatsIcon width={size} height={size} color={focused ? 'rgb(15,94,85)' : 'gray'} />
               )
            }}
         />
         <Tab.Screen
            name={'Status'}
            component={Status}
            options={{
               title: 'Durum',
               tabBarIcon: ({ focused, size }) => (
                  <StatusIcon width={size} height={size} color={focused ? 'rgb(15,94,85)' : 'gray'} />
               )
            }}
         />
         <Tab.Screen
            name={'Calls'}
            component={Calls}
            options={{
               title: 'Aramalar',
               tabBarIcon: ({ focused, size }) => (
                  <CallsIcon width={size} height={size} color={focused ? 'rgb(15,94,85)' : 'gray'} />
               )
            }}
         />
      </Tab.Navigator>
   );
};

const getRootScreenOptions = {
   title: 'WhatsApp',
   headerTitleStyle: {
      color: 'white'
   },
   headerStyle: {
      backgroundColor: 'rgb(15,94,85)'
   },
   headerBackTitle: 'Geri',
   headerTintColor: '#FFFFFF'
};

const Router = () => {
   return (
      <NavigationContainer ref={navigationRef}>
         <RootStack.Navigator screenOptions={getRootScreenOptions}>
            <RootStack.Screen name={'App'} component={TabNavigator} />
            <RootStack.Screen name={'ChatView'} component={ChatView} />
         </RootStack.Navigator>
      </NavigationContainer>
   );
};

export default Router;
