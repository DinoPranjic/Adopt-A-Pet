import styled from "styled-components";

import { useAuthContext } from "../context/authContext";

const fetchAnimals = async (postalCode: string, token: string) => {
  const petResults = await fetch(
    `https://api.petfinder.com/v2/animals?location=${postalCode}&distance=20&country=CA`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res) =>{
      return res.json();
    }).catch((err) => {
      console.log(err);
    })

    console.log(petResults);
}

export {
  fetchAnimals
};