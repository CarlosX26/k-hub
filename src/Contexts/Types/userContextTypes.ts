import { iTech } from "./techContextTypes";

export interface iUserContext {
  seePassword: boolean;
  setSeePassword: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: (params: boolean) => void;
  loginUser: (params: iLogin) => void;
  registerUser: (params: iRegister) => void;
  user: null | iUser;
  setUser: React.Dispatch<React.SetStateAction<null | iUser>>;
  loggout: () => void;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iTech[] | [];
  works: iWork[] | [];
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface iPropsUserContext {
  children: React.ReactNode;
}

export interface iLoginResponse {
  user: iUser;
  token: string;
}

interface iWork {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
}
