import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <View>
      <Text>{user?.email}</Text>
    </View>
  );
};

export default Home;
