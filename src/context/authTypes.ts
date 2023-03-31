import { Dispatch, SetStateAction } from "react";

export interface IAuthContext {
  authState: {
    authToken: string
  };
  authActions: {
    setAuthToken: Dispatch<SetStateAction<string>>
  };
};