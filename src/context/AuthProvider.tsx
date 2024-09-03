import { useState } from "react";
import { createContext, ReactNode } from "react";
import { api } from "../service/api";
import { SignUpProps, UserProps } from "../types/UserProps";

export interface AuthContextProps {
  user: UserProps;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signUp: (data: SignUpProps) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [isLoading, setIsLoading] = useState(false);

  async function login(email: string, password: string) {
    setIsLoading(true);
    console.log(api.defaults);

    return await api
      .post("login", { email, password })
      .then((response) => {
        const { data }: { data: UserProps & { _id: string } } = response.data;

        setUser({ ...data, id: data._id });
        api.defaults.headers.common["Authorization"] = `Bearer `;
        return true;
      })
      .catch((err) => {
        console.log(err);
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
      .then((response) => {
        console.log(response);

        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function logout() {
    setUser({} as UserProps);
    api.defaults.headers.common["Authorization"] = undefined;
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
