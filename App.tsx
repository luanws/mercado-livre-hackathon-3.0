import React from 'react'
import { StatusBar } from 'react-native'
import './src/firebase-config'

import Routes from './src/routes'
import colors from './src/res/colors'

export default function App() {
    return (
        <>
            <StatusBar backgroundColor={colors.primary}></StatusBar>
            <Routes />
        </>
    )
}
