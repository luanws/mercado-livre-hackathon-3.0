import React from 'react'
import { View, Text, StatusBar, ToolbarAndroid } from 'react-native'
import * as firebase from 'firebase'
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
    const currentUser = firebase.auth().currentUser

    return (
        <ScrollView>
            <Text>Logado como {currentUser?.email}</Text>
        </ScrollView>
    )
}

export default Home