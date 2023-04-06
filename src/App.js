import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Popular from "./components/Popular";
import AnimeItem from "./components/AnimeItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popular />}></Route>
        <Route path="/anime/:id" element={<AnimeItem />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
