import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation, ...props }) {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Merhaba Mobil</Text>
         <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      </View>
   );
}

function DetailsScreen() {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Details Screen</Text>
      </View>
   );
}

const Stack = createStackNavigator();

const App = (props) => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               options={{
                  headerTitle: 'Anasayfa'
               }}
               name="Home"
               component={HomeScreen}
            />
            <Stack.Screen name={'Details'} component={DetailsScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default App;
