import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Header from "./routes/Header/Header.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
