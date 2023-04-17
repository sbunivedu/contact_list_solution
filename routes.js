import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from './screens/Favorites';
import User from './screens/User';

import colors from './utils/colors';

import { MaterialIcons } from '@expo/vector-icons';

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const Root = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Contacts">
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            title: 'Contacts',
            headerStyle: {
              backgroundColor: 'white',
            },
            tabBarIcon: getTabBarIcon('list'),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            title: 'Favorites',
            headerStyle: {
              backgroundColor: 'white',
            },
            tabBarIcon: getTabBarIcon('star'),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={({ route }) => {
            return {
              title: 'Me',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: colors.blue,
              },
              tabBarIcon: getTabBarIcon('person'),
            }}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

/* export default function AppContainer() {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="User">
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
        <Root.Screen
          name="Favorites"
          component={Favorites}
        />
        <Root.Screen
          name="User"
          component={User}
          options={({ route }) => {
            return {
              title: 'Me',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: colors.blue,
              },
            }}}
        />
      </Root.Navigator>
    </NavigationContainer>
  )
}
 */