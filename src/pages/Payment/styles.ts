import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 16
    },
    row: {
        flexDirection: 'row',
    },
    containerTotalPrice: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 8,
        marginTop: 8
    },
    totalPrice: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default styles