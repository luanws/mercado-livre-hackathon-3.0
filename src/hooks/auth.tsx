import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { Alert } from 'react-native';
import * as firebase from 'firebase';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: firebase.User | null;
  authenticated: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null as firebase.User | null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      setUser(user);
      setLoading(false);
    });
  }, [user]);

  const signIn = useCallback(async ({ email, password }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
      })
      .catch((error) => {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais',
        );
      });
  }, []);

  const signOut = useCallback(async () => {
    // logout
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, authenticated: user !== null, signIn, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
