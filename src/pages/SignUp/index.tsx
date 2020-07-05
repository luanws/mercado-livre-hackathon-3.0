import React, { useRef, useCallback } from 'react'
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Alert } from 'react-native'
import * as firebase from 'firebase'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useNavigation } from '@react-navigation/native'

import styles, { Container, Branding, Logo, Title } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { useAuth } from '../../hooks/auth'

import colors from '../../res/colors'
import logo from '../../assets/logo.png'

interface SignUpFormData {
  email: string
  password: string
  passwordConfirm: string
}

const SignUp = () => {
  const { signUp } = useAuth()
  const formRef = useRef<FormHandles>(null)

  const navigation = useNavigation()

  const navigateToSignIn = () => navigation.reset({ routes: [{ name: 'SignIn' }] })

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
    formRef.current?.setErrors({})
    signUp(data)
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
          <Title>Mercado food</Title>
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