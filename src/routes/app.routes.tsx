import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {HomeTabsRoutes} from './home-tabs.routes';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="homeTabs" component={HomeTabsRoutes} />
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
