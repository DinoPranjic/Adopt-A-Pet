import styled from 'styled-components'

import { useState } from "react";
import { ChangeEvent } from "react";

import { useAuthContext } from '../context/authContext';

import { fetchAnimals } from '../utils/fetchAnimals';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`

const InputField = styled.input`
  
`

const InputButton = styled.button`
  
`


const Input = () => {
  const [postalCode, setPostalCode] = useState<string>('');
  const { authState } = useAuthContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedCode = e.target.value.slice(0, 3);
    setPostalCode(formattedCode);
  };

  return(
    <InputContainer>
      <InputField
        placeholder='Enter your postal code'
        onChange={handleChange}
      >
      </InputField>
      <InputButton
        onClick={() => fetchAnimals(postalCode, authState.authToken)}
      >
        Go!
      </InputButton>
    </InputContainer>
  )
}

export default Input;