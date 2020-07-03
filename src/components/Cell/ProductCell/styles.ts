import { StyleSheet } from 'react-native'
import colors from '../../../res/colors'

const styles = StyleSheet.create({
    container: {
        margin: 8,
        marginHorizontal: 8,
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 5,
        flex: 1,
        width: 140,
    },
    containerInfo: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    image: {
        height: 64,
        borderRadius: 5,
        resizeMode: 'contain',
        marginBottom: 8,
    },
    name: {
        fontWeight: 'bold',
    },
    info: {
        textAlign: 'center'
    },
    addToCart: {
        padding: 8,
    }
})

export default styles