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


const distanceOptions = [
  { value: '31', label: '50km' },
  { value: '62', label: '100km' },
  { value: '155', label: '250km' }
  //actual values are in miles
];

const Input = () => {
  const [postalCode, setPostalCode] = useState<string>('');
  const [distance, setDistance] = useState<SelectOptionType>(distanceOptions[0]);
  const { authState } = useAuthContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedCode = e.target.value.slice(0, 3);
    setPostalCode(formattedCode);
  };

  const handleSelectChange = (option: SelectOptionType | null) => {
    if (option) {
      setDistance(option)
    }
    //must check if option exists first, can't be null to set state
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
      <Select options={distanceOptions} defaultValue={distanceOptions[0]} onChange={handleSelectChange}/>
      <InputButton
        onClick={() => fetchAnimals(postalCode, authState.authToken, distance.value)}
      >
        Go!
      </InputButton>
    </InputContainer>
  )
}

export default Input;