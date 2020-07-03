import React from 'react'
import { View, ScrollView } from 'react-native'

import styles from './styles'

const ListCardsHorizontal: React.FC = (props) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                {props.children}
            </View>
        </ScrollView>
    )
}

export default ListCardsHorizontal