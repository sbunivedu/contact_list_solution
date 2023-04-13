import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';

const Root = createNativeStackNavigator()

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Contacts" component={Contacts} />
        <Root.Screen name="Profile" component={Profile} />
      </Root.Navigator>
    </NavigationContainer>
  )
}
