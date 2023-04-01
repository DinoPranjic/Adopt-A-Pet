import { useAuthContext } from "../context/authContext";
import styled from 'styled-components'
import { useState } from "react";
import { ChangeEvent } from "react";
import { useEffect } from "react";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostalCode(e.currentTarget.value)
  };

  return(
    <InputContainer>
      <InputField
        placeholder='Enter your postal code'
        value={postalCode}
        onChange={handleChange}
        
      >
      </InputField>
      <InputButton>
        Go!
      </InputButton>
    </InputContainer>
  )
}

export default Input;