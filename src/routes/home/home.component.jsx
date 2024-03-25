import { useEffect, useState } from "react";

import { TheCatAPI } from "@thatapicompany/thecatapi";

import Header from "../Header/Header.component";
import Banner from "../../components/Banner/Banner.component";
import Button from "../../components/Button/Button.component";
import { useCallback } from "react";

import "./home.styles.scss";
import Spinner from "../../components/spinner/spinner.component";

const Home = () => {
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
      console.log(images);
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * catImages.length);
    const randomImage = catImages[randomIndex];
    if (catImages.length === 0) return;
    document.querySelector(".main-pic").src = randomImage.url;
  }, [catImages]);

  useEffect(() => {
    getCatImages();
  }, []);

  return (
    <div>
      <Banner />

      {catImages.length === 0 ? (
        <Spinner />
      ) : (
        <Button buttonText="MEOW!" onClick={clickHandler} />
      )}
      <br />
      <div className="img-container">
        <img
          src="https://external-preview.redd.it/C9tp9TEAy70p5o6znbEV81NtutHBb_xNtCs_6i1xv7k.jpg?auto=webp&s=20221c130590a8203d54b09300c1210410e3a18e"
          alt="cat"
          className="main-pic"
        />
      </div>
    </div>
  );
};

export default Home;
