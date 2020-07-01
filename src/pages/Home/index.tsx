import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const { user, signOut } = useAuth();

  const navigation = useNavigation()

  const navigateToSignIn = () => navigation.reset({ routes: [{ name: 'SignIn' }] })

  return (
    <View>
      <Text>{user?.email}</Text>
      <Button onPress={() => {
        signOut()
      }}>Sair</Button>
    </View>
  );
};

export default Home;
