import { useCallback } from "react";

import { useState } from "react";
import { TheCatAPI } from "@thatapicompany/thecatapi";

import Banner from "../../components/Banner/Banner.component";
import Button from "../../components/Button/Button.component";
import Spinner from "../../components/spinner/spinner.component";

import "./home.styles.scss";

const Home = () => {
  const [catImage, setCatImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const imageSrc = catImage.length > 0
    ? catImage[0].url
    : "https://external-preview.redd.it/C9tp9TEAy70p5o6znbEV81NtutHBb_xNtCs_6i1xv7k.jpg?auto=webp&s=20221c130590a8203d54b09300c1210410e3a18e";

  const getCatImages = useCallback(async () => {
    const apiKey = process.env.REACT_APP_CAT_API_KEY;
    const theCatAPI = new TheCatAPI(apiKey);

    try {
      setLoading(true);
      const image = await theCatAPI.images.searchImages();
      setCatImage(image); // Continue to set state for potential other uses
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const clickHandler = useCallback(async () => {
    await getCatImages();
  }, [getCatImages]);

  return (
    <div>
      <Banner />

      <Button buttonText="MEOW!" onClick={clickHandler} />

      <br />

      {loading && <Spinner />}
      {!loading && (
        <div className="img-container">
          <img src={imageSrc} alt="cat" className="main-pic" />
        </div>
      )}
    </div>
  );
};

export default Home;
