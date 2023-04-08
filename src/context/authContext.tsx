import { useState, useContext, createContext, ReactNode } from 'react';
import { IAuthContext } from './authTypes';

const AuthContext = createContext<IAuthContext | null>(null);

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('No Context Provided!');
  }

  return context;
}

const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const [authToken, setAuthToken] = useState<string>('');

  const authState = {
    authToken
  };

  const authActions = {
    setAuthToken
  };

  return(
    <AuthContext.Provider
    value={{
      authState,
      authActions
    }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export {
  AuthProvider,
  AuthContext,
  useAuthContext
};

