import { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom/dist";
import toast from "react-hot-toast";

import request from "../Services/Api/request";
import {
  iLogin,
  iLoginResponse,
  iPropsUserContext,
  iRegister,
  iUser,
  iUserContext,
} from "./Types/userContextTypes";

const UserContext = createContext({} as iUserContext);

const UserContextProvider = ({ children }: iPropsUserContext) => {
  const [user, setUser] = useState<null | iUser>(null);
  const [seePassword, setSeePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@tokenAuth");
    (async () => {
      if (token) {
        try {
          setLoading(true);
          const { data } = await request.get<iUser>("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          setUser(data);
          navigate(`/dashboard/${data.id}`);
        } catch (error) {
          localStorage.clear();
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginUser = async (dataLogin: iLogin): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await request.post<iLoginResponse>(
        "/sessions",
        dataLogin
      );

      toast.success("Login realizado com sucesso!", {
        duration: 1500,
      });
      localStorage.clear();
      localStorage.setItem("@tokenAuth", data.token);
      localStorage.setItem("@userId", data.user.id);
      setUser(data.user);
      navigate(`/dashboard/${data.user.id}`, { replace: true });
    } catch (error) {
      toast.error(error.response.data.message || "Erro tente novamente!", {
        duration: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (dataRegister: iRegister): Promise<void> => {
    setLoading(true);
    try {
      await request.post("/users", dataRegister);
      toast.success("Cadastro realizado com sucesso!", {
        duration: 1500,
      });
      navigate("/");
    } catch (error) {
      toast.error(
        error.response.data.message || "Ocorreu um erro tente novamente.",
        {
          duration: 1500,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const loggout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <UserContext.Provider
      value={{
        seePassword,
        setSeePassword,
        loading,
        setLoading,
        loginUser,
        registerUser,
        user,
        setUser,
        loggout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
