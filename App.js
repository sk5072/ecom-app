import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';

// import screens
import Signup from './src/screens/signup'
import Login from './src/screens/login'
import Home from './src/screens/home'
import Profile from './src/screens/profile'
import Settings from './src/screens/settings'

// import colors from theme
import * as theme from './src/constants/theme'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LoginTabs(){
  return(
    <Tab.Navigator
      initialRouteName="Login"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.light.foreground,
        inactiveTintColor: theme.colors.silver
      }}>
        <Tab.Screen 
          name="Login" 
          component={Login} 
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color }) => (
              <Icon name="keyboard-arrow-right" color={color} size={30} />
            ),
          }} />
          <Tab.Screen 
          name="Signup" 
          component={Signup} 
          options={{
            tabBarLabel: 'Signup',
            tabBarIcon: ({ color }) => (
              <Icon name="keyboard-arrow-up" color={color} size={30} />
            ),
          }} />
    </Tab.Navigator>
  )
}
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.light.foreground,
        inactiveTintColor: theme.colors.silver
      }}>
        
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={30} />
            ),
          }} />

        <Tab.Screen 
          name="Profile" 
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icon name="person" color={color} size={30} />
            ),
          }} />

        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={30} />
            ),
          }} />
    </Tab.Navigator>
  );
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login / SignUp Screen" component={LoginTabs} />
        <Stack.Screen name="Store" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
