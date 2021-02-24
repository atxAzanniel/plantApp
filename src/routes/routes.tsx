import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigatior from './tab.routes'
import Detail from '../pages/Detail'

const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen name="Home" component={BottomTabNavigatior} />
        <Screen name="Detail" component={Detail} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes
