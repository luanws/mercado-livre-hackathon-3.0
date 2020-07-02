import React, { useRef } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useAuth } from '../../../hooks/auth'

import styles from './styles'

export default () => {
    const { signOut } = useAuth()

    const MenuItem = () => (
        <TouchableOpacity
            onPress={() => signOut()}
            style={styles.menuItem}
        >
            <Text style={styles.menuItemText}>Sair</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <MenuItem />
        </View>
    )
}