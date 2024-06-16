import "../style/index.css";
import "../style/bag.css";
import AppHeader from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchItems from "../components/fetchItems";
import AppFooter from "../components/Footer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetching = useSelector((store) => store.fetchStatus.fetching);

  return (
    <>
      <AppHeader />
      {fetching ? <LoadingSpinner /> : <Outlet />}
      <AppFooter />
      <FetchItems />
    </>
  );
}

export default App;
