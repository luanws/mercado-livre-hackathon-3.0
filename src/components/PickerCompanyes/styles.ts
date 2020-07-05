import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 15
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    text: {
        fontSize: 18
    },
    headerFooterContainer: {
        padding: 10,
        alignItems: 'center'
    },
    clearButton: { backgroundColor: 'grey', borderRadius: 5, marginRight: 10, padding: 5 },
    optionContainer: {
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    optionInnerContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    box: {
        width: 20,
        height: 20,
        marginRight: 10
    }
})

export default styles