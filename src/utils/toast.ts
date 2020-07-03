import Toast from 'react-native-tiny-toast'
import { EdgeInsetsPropType } from 'react-native'

const showSuccess = (msg: string) => Toast.showSuccess(msg, {
    position: Toast.position.CENTER,
    containerStyle: {
        backgroundColor: '#32CD32',
        borderRadius: 15,
        margin: 32,
    },
    textStyle: {
        color: '#fff',
    },
    imgStyle: {},
    mask: false,
    maskStyle: {},
    duration: 1000,
    animation: true,
})

const showError = (msg: string) => Toast.show(msg, {
    position: Toast.position.CENTER,
    containerStyle: {
        backgroundColor: '#f00',
        borderRadius: 15,
        margin: 32,
    },
    textStyle: {
        color: '#fff',
    },
    imgStyle: {},
    mask: false,
    maskStyle: {},
    duration: 4000,
    animation: true,
})


export default { showSuccess, showError }