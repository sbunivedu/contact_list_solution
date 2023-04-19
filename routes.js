import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from './screens/Favorites';
import User from './screens/User';

import colors from './utils/colors';

import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const getDrawerItemIcon = icon=>({tintColor})=>(
  <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />
);

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ContactScreens">
        <Drawer.Screen
          name="ContactsScreens"
          component={ContactsScreens}
        />
        <Drawer.Screen
          name="FavoritesScreens"
          component={FavoritesScreens}
        />
        <Drawer.Screen
          name="UserScreen"
          component={UserScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const contactsStack = createNativeStackNavigator()

function ContactsScreens() {
  return (
    <contactsStack.Navigator
      initialRouteName="Contacts"
      navigationOptions={{
        drawerIcon: getDrawerItemIcon('person'),
      }}>
      <contactsStack.Screen
        name="Contacts"
        component={Contacts}
        screenOptions={{headerShown:false}}
      />
      <contactsStack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => {
          return {
            title: route.params.contact.name.split(' ')[0],
            headerStyle: {
              backgroundColor: colors.blue,
            }
          }
        }}
      />
    </contactsStack.Navigator>
  )
}

const favoritesStack = createNativeStackNavigator()

function FavoritesScreens() {
  return (
    <favoritesStack.Navigator initialRouteName="Favorites">
      <favoritesStack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favorites',
          headerStyle: {
            backgroundColor: 'white',
          }
        }}
      />
      <favoritesStack.Screen
        name="Profile"
        component={Profile}
      />
    </favoritesStack.Navigator>
  )
}

const userStack = createNativeStackNavigator()

function UserScreen() {
  return (
    <userStack.Navigator initialRouteName="User">
      <userStack.Screen
        name="User"
        component={User}
        options={({ route }) => {
          return {
            title: 'Me',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: colors.blue,
            },
          }
        }}
      />
    </userStack.Navigator>
  )
}
