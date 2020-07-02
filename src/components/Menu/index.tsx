import React from 'react'

import { Platform } from 'react-native'
import MenuMobile from './MenuMobile'
import MenuWeb from './MenuWeb'

export default () => {
    function getMenu() {
        switch (Platform.OS) {
            case 'android': return <MenuMobile />
            case 'ios': return <MenuMobile />
            case 'web': return <MenuWeb />
            default: return null
        }
    }

    return getMenu()
}