import { Dispatch, SetStateAction } from "react";

export type Pet = {
  name: string | null,
  age: string | null,
  gender: string | null,
  species: string | null,
  size: string | null,
  url: string | null,
  photoURL: string | null,
  email: string | null,
  phone: string | null
};

export interface IPetContext {
  petState: {
    pets: Pet[] | null
  };
  petActions: {
    setPets: Dispatch<SetStateAction<Pet[] | null>>
  };
};