import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { TheCatAPI } from "@thatapicompany/thecatapi";


import Home from "./routes/home/home.component";
import Header from "./routes/Header/Header.component";
import CatInfo from "./routes/cat-info/cat-info.component";

function App() {
  const [catImages, setCatImages] = useState([]);

  const getCatImages = async () => {
    const apiKey =
      "live_XWfF1hEAWjI9hbq2bCYKA3h7ysvOZeOP55FLXlKc8PmIdbWv0NbLq8QPxssSj1XT";
    const theCatAPI = new TheCatAPI(apiKey);

    try {
      const images = await theCatAPI.images.searchImages({
        limit: 100,
      });
      setCatImages(images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCatImages();
  }, []);


  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home catImages={catImages}/>} />
          <Route path="/info" element={<CatInfo />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
