import { Dispatch, SetStateAction } from "react";

export const tokenUrl = "https://api.petfinder.com/v2/oauth2/token";

export interface IAuthContext {
  authState: {
    authToken: string
  };
  authAction: {
    setAuthToken: Dispatch<SetStateAction<string>>
  };
};