import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerButtonCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        flex: 1,
        marginVertical: 8,
        marginHorizontal: 8
    },
    buttonCard: {
        backgroundColor: 'white',
        margin: 8,
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
        height: 128,
        width: 128,
        justifyContent: 'space-between',
    },
    image: {
        resizeMode: 'contain',
        width: 80,
        height: 80,
    },
    text: {
        textAlign: 'center'
    }
})

export default styles