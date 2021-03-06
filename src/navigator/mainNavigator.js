import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile159816Navigator from '../features/UserProfile159816/navigator';
import Maps159797Navigator from '../features/Maps159797/navigator';
import Settings159775Navigator from '../features/Settings159775/navigator';
import Settings159760Navigator from '../features/Settings159760/navigator';
import NotificationList159759Navigator from '../features/NotificationList159759/navigator';
import Maps159758Navigator from '../features/Maps159758/navigator';
import UserProfile159757Navigator from '../features/UserProfile159757/navigator';
import Maps159738Navigator from '../features/Maps159738/navigator';
import Settings159716Navigator from '../features/Settings159716/navigator';
import Settings159701Navigator from '../features/Settings159701/navigator';
import NotificationList159700Navigator from '../features/NotificationList159700/navigator';
import Maps159699Navigator from '../features/Maps159699/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile159816: { screen: UserProfile159816Navigator },
Maps159797: { screen: Maps159797Navigator },
Settings159775: { screen: Settings159775Navigator },
Settings159760: { screen: Settings159760Navigator },
NotificationList159759: { screen: NotificationList159759Navigator },
Maps159758: { screen: Maps159758Navigator },
UserProfile159757: { screen: UserProfile159757Navigator },
Maps159738: { screen: Maps159738Navigator },
Settings159716: { screen: Settings159716Navigator },
Settings159701: { screen: Settings159701Navigator },
NotificationList159700: { screen: NotificationList159700Navigator },
Maps159699: { screen: Maps159699Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
