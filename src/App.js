import { useDispatch } from "react-redux";
import "./App.css";
import { fetchClients } from "./redux/client/client.slice";

function App() {
  const dispatch = useDispatch();

  dispatch(fetchClients({ name: "Google" }));

  return <div className="App"></div>;
}

export default App;
