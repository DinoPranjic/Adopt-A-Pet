import './App.css';
import { fetchToken } from './utils/fetchToken';
import { useEffect } from 'react';
import { tokenUrl } from './constants';
import { AuthProvider } from './context/authContext';
import { useAuthContext } from './context/authContext';

import Input from './components/Input';
import Header from './components/Header';

const App = () => {
// const { authActions } = useAuthContext();

// const getToken = async () => {
//   const token = await fetchToken(tokenUrl);
//   authActions.setAuthToken(token.access_token);
//   //console.log(token.access_token); 
// }

// useEffect(() => {
//   getToken();
// }, [])
  return (
      <AuthProvider>
        <Header />
      </AuthProvider>

  );
}

export default App;
