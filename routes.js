import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import colors from './utils/colors';

const Root = createNativeStackNavigator()

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen
          name="Contacts"
          component={Contacts}
          options={{
            title: 'Contacts',
            headerStyle: {
              backgroundColor: 'white',
            }
          }}
        />
        <Root.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => {
            return {
              title: route.params.contact.name.split(' ')[0],
              headerStyle: {
                backgroundColor: colors.blue,
              }
            }}}
          />
      </Root.Navigator>
    </NavigationContainer>
  )
}
