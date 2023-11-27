import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { useEffect } from "react";
import { fetchAllData } from "./Actions/DataAction";

function App() {
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return allTickets ? (
    <div style={{ paddingTop: "10px" }}>
      <Navbar />
      {/* <hr style={{ marginTop: "10px" }} /> */}
      <Dashboard />
    </div>
  ) : (
    <></>
  );
}

export default App;