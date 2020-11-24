/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import FlatlistView from './FlatlistView';
import FlatlistViewClass from './FlatlistViewClass';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => FlatlistViewClass);
