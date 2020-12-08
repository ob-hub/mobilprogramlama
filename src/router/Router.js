import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsNavigator from './ChatsNavigator/ChatsNavigator';
import StatusNavigator from './StatusNavigator/StatusNavigator';
import CallsNavigator from './CallsNavigator/CallsNavigator';


const Tab = createBottomTabNavigator();

const Router = (props) => {
   return (
      <NavigationContainer>
         <Tab.Navigator initialRouteName={'Chats'}>
            <Tab.Screen name={'Chats'} component={ChatsNavigator} />
            <Tab.Screen name={'Status'} component={StatusNavigator} />
            <Tab.Screen name={'Calls'} component={CallsNavigator} />
         </Tab.Navigator>
      </NavigationContainer>
   );
};

export default Router;
