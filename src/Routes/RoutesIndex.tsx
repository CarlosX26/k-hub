import { Navigate, Route, Routes } from "react-router-dom";

import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Dashboard } from "../Pages/Dashboard";
import Private from "../Components/Private";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Private />}>
        <Route path="/dashboard/:userId" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesIndex;
