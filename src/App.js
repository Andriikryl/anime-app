import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Popular from "./components/Popular";
import AnimeItem from "./components/AnimeItem";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/anime/:id" element={<AnimeItem />}></Route>
        <Route path="/character/:id" element={<Gallery />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
