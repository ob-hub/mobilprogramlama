import Status from '../../screens/Status/Status';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StatusNavigator = () => {
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
         <Stack.Screen name={'Status'} component={Status} />
      </Stack.Navigator>
   );
};

export default StatusNavigator
