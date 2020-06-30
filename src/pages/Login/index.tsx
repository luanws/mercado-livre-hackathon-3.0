import React, { useState } from 'react'
import { View, Text, TouchableHighlight, Image, ScrollView } from 'react-native'
import * as firebase from 'firebase'

import TextInputLabel from '../../components/TextInputLabel'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigateToHome = () => navigation.reset({ routes: [{ name: 'Home' }] })

    function login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            navigateToHome()
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <ScrollView>
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../assets/img/logo.png')} style={styles.image} />
                </View>
                <TextInputLabel
                    keyboardType="email-address"
                    label="E-mail"
                    style={styles.emailSenhaTextInput}
                    onChangeText={text => setEmail(text)}
                />
                <TextInputLabel
                    secureTextEntry
                    label="Senha"
                    style={styles.emailSenhaTextInput}
                    onChangeText={text => setPassword(text)}
                />
                <TouchableHighlight
                    style={styles.buttonLogin}
                    onPress={() => login(email, password)}
                >
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}

export default Login