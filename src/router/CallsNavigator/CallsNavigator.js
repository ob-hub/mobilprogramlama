import Calls from '../../screens/Calls/Calls';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const CallsNavigator = () => {
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
         <Stack.Screen name={'Calls'} component={Calls} />
      </Stack.Navigator>
   );
};

export default CallsNavigator;
