import styled from 'styled-components'
import Select from 'react-select';

import { useState } from "react";
import { useEffect } from 'react';
import { ChangeEvent } from "react";
import { useAuthContext } from '../context/authContext';
import { fetchAnimals } from '../utils/fetchAnimals';

import { SelectOptionType } from '../constants';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`

const InputField = styled.input`
  
`

const InputButton = styled.button`
  
`

const options = [
  { value: '50', label: '50km' },
  { value: '100', label: '100km' },
  { value: '250', label: '250km' }
];

const Input = () => {
  const [postalCode, setPostalCode] = useState<string>('');
  const [distance, setDistance] = useState<SelectOptionType>(options[0]);
  const { authState } = useAuthContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedCode = e.target.value.slice(0, 3);
    setPostalCode(formattedCode);
  };

  const handleSelectChange = (option: SelectOptionType | null) => {
    if (option) {
      setDistance(option)
    }
  };

  useEffect(() => {
    console.log(distance);
  }, [distance]);

  return(
    <InputContainer>
      <InputField
        placeholder='Enter your postal code'
        onChange={handleInputChange}
      >
      </InputField>
      <Select options={options} defaultValue={options[0]} onChange={handleSelectChange}/>
      <InputButton
        onClick={() => fetchAnimals(postalCode, authState.authToken)}
      >
        Go!
      </InputButton>
    </InputContainer>
  )
}

export default Input;