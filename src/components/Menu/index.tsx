import React from 'react'

import { Platform } from 'react-native'
import MenuMobile from './MenuMobile'

export default () => {
    function getMenu() {
        switch (Platform.OS) {
            case 'android': return <MenuMobile />
            case 'ios': return <MenuMobile />
            default: return null
        }
    }

    return getMenu()
}