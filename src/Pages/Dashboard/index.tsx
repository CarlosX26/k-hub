import { Header } from "../../Components/Header";
import { CardProfile } from "../../Components/CardProfile";
import DashboardMain from "./DashboardMain";
import { TechContextProvider } from "../../Contexts/TechContext";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <CardProfile />
      <TechContextProvider>
        <DashboardMain />
      </TechContextProvider>
    </>
  );
};
