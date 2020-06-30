import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../res/colors'

const styles = StyleSheet.create({
    emailSenhaTextInput: {
        marginHorizontal: 8,
        marginVertical: 4
    },
    buttonLogin: {
        padding: 8,
        margin: 8,
        borderRadius: 100,
        backgroundColor: colors.primary,
    },
    textButtonLogin: {
        color: 'white',
        textAlign: 'center',
    },
    image: {
        resizeMode: 'contain',
        marginVertical: 16,
        width: 200,
        height: 150,
    }
})

export default styles