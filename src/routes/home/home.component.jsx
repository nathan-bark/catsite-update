import { useCallback } from "react";

import Banner from "../../components/Banner/Banner.component";
import Button from "../../components/Button/Button.component";
import Spinner from "../../components/spinner/spinner.component";

import "./home.styles.scss";

const Home = (catImages) => {
  const catArray = catImages.catImages;

  const clickHandler = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * catArray.length);
    const randomImage = catArray[randomIndex];
    if (catArray.length === 0) return;
    document.querySelector(".main-pic").src = randomImage.url;
  }, [catArray]);

  return (
    <div>
      <Banner />

      {catArray.length === 0 ? (
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
