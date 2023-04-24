import { NavigationContainer, DrawerActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from './screens/Favorites';
import User from './screens/User';

import colors from './utils/colors';

import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const getDrawerItemIcon = icon=>({color})=>(
  <MaterialIcons name={icon} size={22} style={{ color: color }} />
);

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ContactScreens"
        >
        <Drawer.Screen
          name="ContactsScreens"
          component={ContactsScreens}
          options={{
            drawerIcon: getDrawerItemIcon('person'),
            drawerLabel: 'Contacts',
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="FavoritesScreens"
          component={FavoritesScreens}
          options={{
            drawerIcon: getDrawerItemIcon('list'),
            drawerLabel: 'Favorites',
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: getDrawerItemIcon('star'),
            drawerLabel: 'User',
            headerShown: false
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const contactsStack = createNativeStackNavigator()

function ContactsScreens() {
  return (
    <contactsStack.Navigator
      initialRouteName="Contacts">
      <contactsStack.Screen
        name="Contacts"
        component={Contacts}
        options={({ navigation, route }) => ({
          headerLeft: ()=>(
            <MaterialIcons name="menu" size={24} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />),
        })}
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
        options={({ navigation, route }) => ({
          title: 'Favorites',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: ()=>(
            <MaterialIcons name="menu" size={24} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />),
        })}
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
        options={({ navigation, route }) => ({
          title: 'Me',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerLeft: ()=>(
            <MaterialIcons name="menu" size={24} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />),
        })}
      />
    </userStack.Navigator>
  )
}
