import { StyleSheet } from 'react-native'
import colors from '../../../res/colors'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        marginHorizontal: 16,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    column: {
        marginHorizontal: 8
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 5,
        resizeMode: 'contain',
    },
    name: {
        fontWeight: 'bold',
    },
    addToCart: {
        padding: 8,
    }
})

export default styles