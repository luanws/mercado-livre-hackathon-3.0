import React from 'react'
import { StyleSheet } from 'react-native'

import colors from '../../res/colors'

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.transparent,
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 5,
        padding: 8,
        paddingHorizontal: 16,
    },
    text: {
        color: colors.primary,
    },
    containerText: {
        backgroundColor: colors.background,
        marginBottom: -10,
        zIndex: 1,
        marginLeft: 8,
        paddingHorizontal: 8,
    }
})

export default styles