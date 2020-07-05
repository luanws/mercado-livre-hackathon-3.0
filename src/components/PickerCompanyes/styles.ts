import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerField: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 16,
        borderColor: '#f4f4f4',
        borderWidth: 2,
        marginHorizontal: 16,
        borderRadius: 3
    },
    containerItem: {
        margin: 8
    },
    defaultText: {
        margin: 8
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
})

export default styles