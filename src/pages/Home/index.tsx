import React, { useRef } from 'react'
import { View, Text, Image } from 'react-native'

import { useAuth } from '../../hooks/auth'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

const Home: React.FC = () => {
  const { user, signOut } = useAuth()

  const navigation = useNavigation()

  const navigateToSignIn = () => navigation.reset({ routes: [{ name: 'SignIn' }] })

  return (
    <View>
      <Text>{user?.email}</Text>
    </View>
  )
}

export default Home
