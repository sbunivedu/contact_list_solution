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

const Tab = createBottomTabNavigator()

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ContactScreens"
        screenOptions={{
          tabBarLabelStyle: {
            display: "none" // hide screen labels on tab bar
          },
        }}>
        <Tab.Screen
          name="ContactsScreens"
          component={ContactsScreens}
          options={{
            tabBarIcon: getTabBarIcon('list'),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="FavoritesScreens"
          component={FavoritesScreens}
          options={{
            tabBarIcon: getTabBarIcon('star'),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            tabBarIcon: getTabBarIcon('person'),
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const contactsStack = createNativeStackNavigator()

function ContactsScreens() {
  return (
    <contactsStack.Navigator
      initialRouteName="Contacts"
      options={{
        tabBarIcon: getTabBarIcon('list'),
      }}>
      <contactsStack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: 'Contacts',
          headerStyle: {
            backgroundColor: 'white',
          }
        }}
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
    <favoritesStack.Navigator
      initialRouteName="Favorites"
      options={{
        tabBarIcon: getTabBarIcon('star'),
      }}>
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
        options={({ route }) => {
          return {
            title: route.params.contact.name.split(' ')[0],
            headerStyle: {
              backgroundColor: colors.blue,
            }
          }
        }}
      />
    </favoritesStack.Navigator>
  )
}

const userStack = createNativeStackNavigator()

function UserScreen() {
  return (
    <userStack.Navigator
      initialRouteName="User"
      options={{
        tabBarIcon: getTabBarIcon('person'),
      }}>
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
