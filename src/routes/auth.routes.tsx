import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../res/colors'

import SignIn from '../pages/SignIn'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: colors.background },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
)

export default AuthRoutes
