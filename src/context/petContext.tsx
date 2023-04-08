import { useState, useContext, createContext, ReactNode } from 'react';

import { IPetContext, Pet } from './petTypes';

const PetContext = createContext<IPetContext | null>(null);

const usePetContext = () => {
  const context = useContext(PetContext);

  if (!context) {
    throw new Error('No Context Provided!');
  }

  return context;

};

const PetProvider = ({ children }: { children?: ReactNode}) => {
  const [pets, setPets] = useState<Pet[] | null>(null);

  const petState = {
    pets
  };

  const petActions = {
    setPets
  };

  return(
    <PetContext.Provider
    value={{
      petState,
      petActions
    }}
    >
      {children}
    </PetContext.Provider>
  )
}