import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';

// import { Container } from './styles';

const Home: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <View />;
  }

  return (
    <View>
      <Text />
    </View>
  );
};

export default Home;
