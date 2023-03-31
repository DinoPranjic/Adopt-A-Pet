import { Dispatch, SetStateAction } from "react";

export interface IAuthContext {
  authState: {
    authToken: string
  };
  authAction: {
    setAuthToken: Dispatch<SetStateAction<string>>
  };
};