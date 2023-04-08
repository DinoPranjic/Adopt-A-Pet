import './App.css';
import { fetchToken } from './utils/fetchToken';
import { useEffect } from 'react';
import { tokenUrl } from './constants';
import { AuthProvider } from './context/authContext';
import { useAuthContext } from './context/authContext';

import Input from './components/Input';
import Header from './components/Header';

const App = () => {

  return (
      <AuthProvider>
        <Header />
      </AuthProvider>

  );
}

export default App;
