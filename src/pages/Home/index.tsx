import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'

import colors from '../../res/colors'
import styles from './styles'

interface ButtonCardProps {
  title: string
  onPress: () => void
}

const ButtonCard: React.FC<ButtonCardProps> = (props) => (
  <TouchableOpacity style={styles.buttonCard} onPress={props.onPress}>
    {props.children}
    <Text style={{ textAlign: 'center' }}>{props.title}</Text>
  </TouchableOpacity>
)

const Home: React.FC = () => {
  const navigation = useNavigation()

  const navigateToProductSelection = () => navigation.navigate('ProductSelection')
  const navigateToCart = () => navigation.navigate('Cart')

  return (
    <ScrollView>
      <View style={styles.containerButtonCards}>
        <ButtonCard title="Compras" onPress={navigateToProductSelection}>
          <Image style={styles.image} source={require('../../assets/img/supermarket.png')} />
        </ButtonCard>
        <ButtonCard title="Carrinho" onPress={navigateToCart}>
          <Image style={styles.image} source={require('../../assets/img/cart.png')} />
        </ButtonCard>
      </View>
    </ScrollView>
  )
}

export default Home
