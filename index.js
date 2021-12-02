/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Main from './Main'
import {name as appName} from './app.json';
import FonkLifeCycle from './FonkLifeCycle'
import ImageKullan from './ImageKullan'
import NavigationApp from './NavigationApp'


AppRegistry.registerComponent(appName, () => NavigationApp);
