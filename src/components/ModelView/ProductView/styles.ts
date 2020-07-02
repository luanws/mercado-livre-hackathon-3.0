import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        marginHorizontal: 16,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    containerContainerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1
    },
    containerText: {
        marginHorizontal: 16
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
})

export default styles