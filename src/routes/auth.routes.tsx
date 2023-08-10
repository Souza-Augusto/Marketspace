import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../screens/Signin';

const {Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  );
}
