import { useAuthContext } from "../context/authContext";
import { fetchToken } from "../utils/fetchToken";
import { tokenUrl } from "../constants";
import { useEffect } from "react";

import Input from "./Input";

import styled from "styled-components";

const Header = () => {
  const { authActions } = useAuthContext();

  const getToken = async () => {
    const token = await fetchToken(tokenUrl);
    authActions.setAuthToken(token.access_token);
    console.log(token.access_token); 
  }

  useEffect(() => {
    getToken();
  }, [])

  return(
    <>
      <h1>Adopt-A-Pet</h1>
      <Input />
    </>
  )
}

export default Header;