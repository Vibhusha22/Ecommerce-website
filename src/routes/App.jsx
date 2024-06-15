import "../style/index.css";
import "../style/bag.css";
import AppHeader from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AppFooter from "../components/Footer";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
}

export default App;
