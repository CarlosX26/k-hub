import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import request from "../Services/Api/request";
import {
  iEditTech,
  iNewTech,
  iPropsTechContext,
  iTech,
  iTechContext,
} from "./Types/techContextTypes";
import { iUser } from "./Types/userContextTypes";
import { UserContext } from "./UserContext";

const TechContext = createContext({} as iTechContext);

const TechContextProvider = ({ children }: iPropsTechContext) => {
  const [loading, setLoading] = useState(false);
  const [showModalNewTech, setShowModalNewTech] = useState(false);
  const [showModalEditTech, setShowModalEditTech] = useState(false);
  const [techEdit, setTechEdit] = useState({} as iTech);
  const [listTechs, setListTechs] = useState<iTech[]>([]);

  const { user, setUser } = useContext(UserContext);
  const token = localStorage.getItem("@tokenAuth");

  useEffect(() => {
    (() => {
      setListTechs([...(user?.techs || [])]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createTechnology = async (dataNewTech: iNewTech): Promise<void> => {
    try {
      setLoading(true);
      await request.post("/users/techs", dataNewTech, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const { data } = await request.get<iUser>(`/users/${user?.id}`);
      setUser(data);
      setListTechs(data.techs);
      setShowModalNewTech(false);
      toast.success("Tecnologia cadastrada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro, tente novamente!");
    } finally {
      setLoading(false);
    }
  };
  const deleteTechnology = async (techId: string): Promise<void> => {
    try {
      setLoading(true);
      await request.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = await request.get<iUser>(`/users/${user?.id}`);
      setUser(data);
      setListTechs(data.techs);
      toast.success("Tecnologia deletada com sucesso");
      setShowModalEditTech(false);
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  const editTechnology = async (dataEditTech: iEditTech): Promise<void> => {
    try {
      setLoading(true);
      await request.put(`/users/techs/${techEdit.id}`, dataEditTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = await request.get<iUser>(`/users/${user?.id}`);
      setUser(data);
      setListTechs(data.techs);
      toast.success("Tecnologia editada com sucesso");
      setShowModalEditTech(false);
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        loading,
        createTechnology,
        deleteTechnology,
        listTechs,
        showModalNewTech,
        setShowModalNewTech,
        showModalEditTech,
        setShowModalEditTech,
        techEdit,
        setTechEdit,
        editTechnology,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export { TechContext, TechContextProvider };
