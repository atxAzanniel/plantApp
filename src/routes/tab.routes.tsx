import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'

const { Navigator, Screen } = createBottomTabNavigator()

const BottomTabNavigatior: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          height: 65,
          justifyContent: 'center'
        }
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}

export default BottomTabNavigatior
