import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons as MC } from '@expo/vector-icons'

import Home from '../pages/Home'
import Favourite from '../pages/Favourite'
import Profile from '../pages/Profile'

const { Navigator, Screen } = createBottomTabNavigator()

const defaultWidth = 1.3

const BottomTabNavigatior: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: '#008f6e',
        inactiveTintColor: '#ccc',
        keyboardHidesTabBar: true,
        style: {
          height: 65,
          justifyContent: 'center',
          paddingVertical: 15,
          backgroundColor: '#eff4f0',
          elevation: 2
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <MC name="home-variant" color={color} size={size * defaultWidth} />
          )
        }}
      />

      <Screen
        name="Favourite"
        component={Favourite}
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <MC name="heart" color={color} size={size * defaultWidth} />
          )
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <MC name="account" color={color} size={size * defaultWidth} />
          )
        }}
      />
    </Navigator>
  )
}

export default BottomTabNavigatior
