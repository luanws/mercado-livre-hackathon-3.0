import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'


import colors from '../res/colors'
import Menu from '../components/Menu'

import Home from '../pages/Home'
import Cart from '../pages/Cart'

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
    <App.Screen name="Cart" component={Cart} />
  </App.Navigator >
)

export default AppRoutes
