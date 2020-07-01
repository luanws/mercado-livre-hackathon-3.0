import { Platform, Alert } from 'react-native'

function alertDefault(title: string, message: string) {
    Alert.alert(title, message)
}

function alertAndroid(title: string, message: string) {
    alertDefault(title, message)
}

function alertIOS(title: string, message: string) {
    alertDefault(title, message)
}

function alertWeb(title: string, message: string) {
    alert(`${title.toUpperCase()}\n${message}`)
}

function alertDialog(title: string, message: string) {
    switch (Platform.OS) {
        case 'android':
            alertAndroid(title, message)
            break
        case 'ios':
            alertIOS(title, message)
            break
        case 'web':
            alertWeb(title, message)
            break
        default:
            alertDefault(title, message)
    }
}

export { alertDialog }