import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from '../service/NavigationService';
import { createStackNavigator } from '@react-navigation/stack';
import Chats from '../screens/Chats/Chats';
import Status from '../screens/Status/Status';
import Calls from '../screens/Calls/Calls';
import ChatView from '../screens/Chats/ChatView';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const TabNavigator = () => {
   return (
      <Tab.Navigator initialRouteName={'Chats'}>
         <Tab.Screen name={'Chats'} component={Chats} />
         <Tab.Screen name={'Status'} component={Status} />
         <Tab.Screen name={'Calls'} component={Calls} />
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

const Router = (props) => {
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
