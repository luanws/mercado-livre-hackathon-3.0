import { StyleSheet } from 'react-native'
import colors from '../../res/colors'

const styles = StyleSheet.create({
    image: {
        height: 128,
        borderRadius: 5,
        resizeMode: 'contain',
        padding: 16,
    },
    addToCart: {
        alignItems: 'flex-end',
        margin: 16,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginVertical: 8,
        top: 0,
        right: 0
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    container: {
        marginVertical: 8,
        marginHorizontal: 16,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#070'
    },
    textItemIcon: {
        marginLeft: 8
    }
})

export default styles