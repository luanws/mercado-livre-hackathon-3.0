import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, View } from 'react-native'
import { AppLoading } from 'expo'
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter'
import './src/firebase-config'
import AppProvider from './src/hooks'
import colors from './src/res/colors'
import Routes from './src/routes'

import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'FIREBASE WARNING: Using an unspecified index.',
  'source.uri should not be an empty string',
])

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  )
}

export default App
