import React from 'react';
import 'react-native-gesture-handler';
import Router from './router/Router';
import faker from 'faker';

faker.locale = 'tr'

const App = (props) => {
   return (
     <Router />
   );
};

export default App;
