import React, { useRef } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Menu, { MenuItem } from 'react-native-material-menu'
import { Entypo, Feather } from '@expo/vector-icons'
import { useAuth } from '../../../hooks/auth'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default () => {
    const { signOut } = useAuth()
    const menuRef = useRef<Menu>(null)

    const navigation = useNavigation()

    const navigateToCart = () => navigation.navigate('Cart') 

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigateToCart()}>
                <Feather name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
            <Menu
                ref={menuRef}
                style={styles.menuContainer}
                button={
                    <TouchableOpacity onPress={() => menuRef.current?.show()}>
                        <Entypo name="dots-three-vertical" size={18} color="white" style={styles.menuIcon} />
                    </TouchableOpacity>
                }
            >
                <MenuItem onPress={() => signOut()} textStyle={styles.menuItem}>Sair</MenuItem>
            </Menu>
        </View>
    )
}