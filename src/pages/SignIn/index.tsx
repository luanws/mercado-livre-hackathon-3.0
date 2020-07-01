import React, { useRef, useCallback } from 'react'
import { StatusBar, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useAuth } from '../../hooks/auth'

import styles, { Container, Branding, Logo, Title } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logo from '../../assets/logo.png'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const navigation = useNavigation()
  const navigateToSignUp = () => navigation.reset({ routes: [{ name: 'SignUp' }] })

  const { signIn } = useAuth()

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      formRef.current?.setErrors({})

      await signIn({
        email: data.email,
        password: data.password,
      })
    },
    [signIn],
  )

  return (
    <ScrollView>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <Container>
        <Branding>
          <Logo source={logo} />
          <Title>Mercado Rápido</Title>
        </Branding>

        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus()
            }}
          />

          <Input
            ref={passwordInputRef}
            name="password"
            icon="lock"
            placeholder="Senha"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm()
            }}
          />

          <Button onPress={() => {
            formRef.current?.submitForm()
          }}>Entrar</Button>
        </Form>
        <TouchableOpacity onPress={() => navigateToSignUp()}>
          <Text style={styles.textSignUp}>Não possui uma conta? Clique aqui e cadastre-se!</Text>
        </TouchableOpacity>
      </Container>
    </ScrollView>
  )
}

export default SignIn
