import React, { useRef, useCallback } from 'react'
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Alert } from 'react-native'
import * as firebase from 'firebase'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import styles, { Container, Branding, Logo, Title } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

import colors from '../../res/colors'
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

interface SignInFormData {
  email: string
  password: string
  passwordConfirm: string
}

const SignUp = () => {
  const formRef = useRef<FormHandles>(null)

  const navigation = useNavigation()

  const navigateToHome = () => navigation.reset({ routes: [{ name: 'Home' }] })
  const navigateToSignIn = () => navigation.reset({ routes: [{ name: 'SignIn' }] })

  function signUp(email: string, password: string, passwordConfirm: string) {
    if (password !== passwordConfirm) {
      Alert.alert(
        'Erro ao tentar realizar cadastro',
        'As senhas não coincidem'
      )
      return
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => navigateToHome())
      .catch(error => {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais',
        )
      })
  }

  const handleSignUp = useCallback(async (data: SignInFormData) => {
    formRef.current?.setErrors({})
    signUp(data.email, data.password, data.passwordConfirm)
  }, [])

  return (
    <ScrollView>
      <StatusBar
        backgroundColor={colors.background}
        barStyle="dark-content"
      />
      <Container>
        <Branding>
          <Logo source={logo} />
          <Title>Mercado Rápido</Title>
        </Branding>

        <Form ref={formRef} onSubmit={handleSignUp}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {

            }}
          />
          <Input
            name="password"
            icon="lock"
            placeholder="Senha"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm()
            }}
          />
          <Input
            name="passwordConfirm"
            icon="lock"
            placeholder="Confirmação de senha"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm()
            }}
          />
          <Button onPress={() => {
            formRef.current?.submitForm()
          }}>Cadastrar</Button>
          <TouchableOpacity onPress={() => navigateToSignIn()}>
            <Text style={styles.textSignUp}>Já possui uma conta? Clique aqui e faça login!</Text>
          </TouchableOpacity>
        </Form>
      </Container>
    </ScrollView>
  )
}

export default SignUp