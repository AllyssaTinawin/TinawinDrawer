import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';
import ProfileScreen from './Profile';
import SettingsScreen from './Settings';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
      return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
      );
};
export default DrawerNavigation;