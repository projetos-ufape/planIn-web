import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import { api } from "../service/api";
import { SignUpProps, UserProps } from "../types/UserProps";
import { AxiosError } from "axios";
import { handleError } from "../utils/handleError";

export interface AuthContextProps {
  user: UserProps | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signUp: (data: SignUpProps) => Promise<boolean>;
  logout: () => Promise<void>;
  userExists: (email: string) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function login(email: string, password: string) {
    setIsLoading(true);

    return await api
      .post("login", { email, password })
      .then((response) => {
        const { data }: { data: UserProps & { _id: string } } = response.data;

        setUser({ ...data, id: data._id });
        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        return true;
      })
      .catch((err: AxiosError) => {
        handleError(err.response?.data);
        return false;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function signUp(data: SignUpProps) {
    setIsLoading(true);

    return await api
      .post("signup", data)
      .then(() => {
        return true;
      })
      .catch((err) => {
        handleError(err.response?.data);
        return false;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function logout() {
    setUser(null);
    api.defaults.headers.common["Authorization"] = undefined;
  }

  async function userExists(email: string) {
    setIsLoading(true);
    return await api
      .get("user-exists", { params: { email: email}})
      .then(() => {
        return true;
      })
      .catch((err: AxiosError) => {
        if(err.status !== 404) {
          handleError(err.response?.data);
        }
        return false;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, signUp, userExists }}>
      {children}
    </AuthContext.Provider>
  );
};
