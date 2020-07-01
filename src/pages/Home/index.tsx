import React from 'react'
import { View, Text } from 'react-native'
import * as firebase from 'firebase'

const Home = () => {
    const currentUser = firebase.auth().currentUser

    return (
        <View>
            <Text>Logado como {currentUser?.email}</Text>
        </View>
    )
}

export default Home