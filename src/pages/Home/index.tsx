import React, { useRef } from 'react'
import { View, Text, Image } from 'react-native'

import { useAuth } from '../../hooks/auth'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import styles from './styles'

const Home: React.FC = () => {
  const { user, signOut } = useAuth()

  const navigation = useNavigation()

  const navigateToSignIn = () => navigation.reset({ routes: [{ name: 'SignIn' }] })

  return (
    <View>
      <Text>{user?.email}</Text>
      <Button onPress={() => {
        signOut()
      }}>Sair</Button>
    </View>
  )
}

export default Home
