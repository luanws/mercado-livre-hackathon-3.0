import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {} from './src/firebase-config';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';
import colors from './src/res/colors';
import Routes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
