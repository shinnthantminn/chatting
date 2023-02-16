/**
 * @format
 */

//  App
import App from './App';

// Navigation
import {Navigation} from 'react-native-navigation';

// register components
Navigation.registerComponent('app', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'app',
            },
          },
        ],
      },
    },
  });
});
