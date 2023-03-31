import './App.css';
import { fetchToken } from './utils/fetchToken';
import { useEffect } from 'react';
import { tokenUrl } from './constants';
import { AuthProvider } from './context/authContext';

const App = () => {

const getToken = async () => {
  const token = await fetchToken(tokenUrl);

  console.log(token.access_token); 
}

useEffect(() => {
  getToken();
}, [])
  return (
    <>
      <AuthProvider>
        
      </AuthProvider>
    </>
  );
}

export default App;
