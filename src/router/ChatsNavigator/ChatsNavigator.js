import Chats from '../../screens/Chats/Chats';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ChatsNavigator = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            title: 'WhatsApp',
            headerTitleStyle: {
               color: 'white'
            },
            headerStyle: {
               backgroundColor: 'rgb(15,94,85)'
            }
         }}>
         <Stack.Screen name={'Chats'} component={Chats} />
      </Stack.Navigator>
   );
};

export default ChatsNavigator
