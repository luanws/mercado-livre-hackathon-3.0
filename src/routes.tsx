import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import colors from './res/colors'


import Home from './pages/Home/Home'
import Login from './pages/Login/index'

const Stack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: colors.primary
                },
                cardStyle: {
                    backgroundColor: colors.background
                }
            }}>
                <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
                <Stack.Screen name="Home" component={Home} options={{ title: "Início" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes