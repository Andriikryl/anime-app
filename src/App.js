import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Popular from "./components/Popular";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Popular />
      </div>
    </BrowserRouter>
  );
}

export default App;
