import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Header from "./routes/Header/Header.component";
import CatInfo from "./routes/cat-info/cat-info.component";
import ChooseCat from "./routes/choose-cat/choose-cat.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/info" element={<CatInfo />} />
          <Route path="/new-pet" element={<ChooseCat />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
