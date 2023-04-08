import './App.css';

import { AuthProvider } from './context/authContext';
import { PetProvider } from './context/petContext';
import { useEffect } from 'react';

import { usePetContext } from './context/petContext';

import Header from './components/Header';

const App = () => {

  return (
      <AuthProvider>
        <PetProvider>
          <Header />
        </PetProvider>
      </AuthProvider>
  );
};

export default App;
