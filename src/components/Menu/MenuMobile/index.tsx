import React, { useRef } from 'react'
import { TouchableOpacity, Image, Platform } from 'react-native'
import Menu, { MenuItem } from 'react-native-material-menu'
import { Entypo } from '@expo/vector-icons'
import { useAuth } from '../../../hooks/auth'

import { alertDialog } from '../../../utils/alert'
import styles from './styles'

export default () => {
    const { signOut } = useAuth()
    const menuRef = useRef<Menu>(null)

    return (
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
    )
}