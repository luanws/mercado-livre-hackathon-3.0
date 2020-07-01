import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react'
import * as firebase from 'firebase'

import { alertDialog } from '../utils/alert'

interface SignInCredentials {
  email: string
  password: string
}

interface SignUpCredentials {
  email: string
  password: string
  passwordConfirm: string
}

interface AuthContextData {
  user: firebase.User | null
  authenticated: boolean
  signIn(credentials: SignInCredentials): Promise<void>
  signUp(credentials: SignUpCredentials): Promise<void>
  signOut(): Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null as firebase.User | null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      setUser(user)
      setLoading(false)
    })
  }, [user])

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user)
      }).catch(error => {
        alertDialog(
          'Erro na autenticação',
          'Ocorreu um erro ao tentar fazer login. Verifique as credenciais e tente novamente.',
        )
      })
  }, [])

  const signOut = useCallback(async () => {
    firebase.auth().signOut()
  }, [])


  const signUp = useCallback(async ({ email, password, passwordConfirm }: SignUpCredentials) => {
    if (password !== passwordConfirm) {
      alertDialog(
        'Erro ao tentar realizar cadastro',
        'As senhas não coincidem.'
      )
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => setUser(response.user))
        .catch(error => {
          const code = error.code
          const message = error.message
          alertDialog(
            'Erro ao tentar realizar o cadastro',
            message,
          )
        })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, authenticated: user !== null, signIn, signUp, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
