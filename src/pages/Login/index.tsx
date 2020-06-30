import React from 'react'
import { View, Text, TouchableHighlight, Image, ScrollView } from 'react-native'

import TextInputLabel from '../../components/TextInputLabel'
import styles from './styles'

const Login = () => {
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
                />
                <TextInputLabel
                    secureTextEntry
                    label="Senha"
                    style={styles.emailSenhaTextInput}
                />
                <TouchableHighlight style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}

export default Login