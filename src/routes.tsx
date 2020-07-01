import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './res/colors';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                cardStyle: {
                    backgroundColor: colors.background,
                },
            }}
        >
            <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Login', headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Cadastro', headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
        </Stack.Navigator>
    );
};

export default Routes;
