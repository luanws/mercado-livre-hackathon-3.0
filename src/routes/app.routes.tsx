import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'


import colors from '../res/colors'
import Menu from '../components/Menu'

import Home from '../pages/Home'

const App = createStackNavigator()

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      cardStyle: {
        backgroundColor: colors.background,
      },
      headerRight: () => (
        <Menu></Menu>
      )
    }}
  >
    <App.Screen name="Home" component={Home} />
  </App.Navigator >
)

export default AppRoutes
