import React, { useRef, useCallback } from 'react';
import {
    StatusBar,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, Branding, Logo, Title } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.png';
import { ScrollView } from 'react-native-gesture-handler';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);

    const navigation = useNavigation();

    const handleSignIn = useCallback(async (data: SignInFormData) => {
        formRef.current?.setErrors({});

        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((response) => {
            console.log(response);
        }).catch((error) => {
            Alert.alert(
                'Erro na autenticação',
                'Ocorreu um erro ao fazer login, cheque as credenciais',
            );
        });
    }, []);

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
                            passwordInputRef.current?.focus();
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
                            formRef.current?.submitForm();
                        }}
                    />

                    <Button onPress={() => {
                        formRef.current?.submitForm();
                    }}>Entrar</Button>
                </Form>
            </Container>
        </ScrollView>
    );
};

export default SignIn;
