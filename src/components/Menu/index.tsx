import React, { useRef } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import Menu, { MenuItem } from 'react-native-material-menu'

import styles from './styles'

export default () => {
    let menuRef = useRef<Menu>(null)

    return (
        <Menu
            ref={menuRef}
            button={
                <TouchableOpacity onPress={() => menuRef.current?.show()}>
                    <Image source={require('../../assets/img/logo.png')} resizeMode='contain' />
                </TouchableOpacity>
            }
        >
            <MenuItem onPress={() => { }} textStyle={styles.menuItem}>Rate App</MenuItem>
            <MenuItem onPress={() => { }} textStyle={styles.menuItem}>Invite Friends</MenuItem>
            <MenuItem onPress={() => { }} textStyle={styles.menuItem}>Logout</MenuItem>
        </Menu>
    )
}