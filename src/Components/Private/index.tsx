import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

const Private = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default Private;
