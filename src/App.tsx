import RoutesIndex from "./Routes/RoutesIndex";

import { Toaster } from "react-hot-toast";

import GlobalStyle from "./Styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <RoutesIndex />

      <Toaster />
    </>
  );
};

export default App;
