import React, { useRef } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useAuth } from '../../../hooks/auth'
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

interface Props {
    onPress: () => void
}

export default () => {
    const { signOut } = useAuth()

    const navigation = useNavigation()

    const navigateToCart = () => navigation.navigate('Cart') 

    const MenuItem: React.FC<Props> = (props) => (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.menuItem}
        >{props.children}</TouchableOpacity>
    )

    const MenuItemText: React.FC<Props> = (props) => (
        <MenuItem onPress={props.onPress}>
            <Text style={styles.menuItemText}>Sair</Text>
        </MenuItem>
    )


    return (
        <View style={styles.container}>
            <MenuItem onPress={navigateToCart}>
                <Feather name="shopping-cart" size={24} color="white" />
            </MenuItem>
            <MenuItemText onPress={signOut} />
        </View>
    )
}