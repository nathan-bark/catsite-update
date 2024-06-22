import React, { useEffect, useState } from "react";

import "./choose-cat.styles.scss";

import Banner from "../../components/Banner/Banner.component";
import SelectedCats from "../../components/SelectedCatDisplay/SelectedCats.component";
import ChooseCatDisplay from "../../components/ChooseCatDisplay/chooseCatDisplay.component";
import NoCatsDisplay from "../../components/NoCats/noCatsDisplay.component";

const ChooseCat = () => {
  const apiKey =
    `?api_key=${process.env.REACT_APP_CAT_API_KEY}`;
  const baseUrl = `https://api.thecatapi.com/v1/breeds`;
  const fetchUrl = baseUrl + apiKey;

  const [breeds, setBreeds] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);
  const [noCats, setNoCats] = useState(false);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setBreeds([...data]);
      } catch (error) {
        console.error("Error fetching cat breeds:", error);
      }
    };

    fetchBreeds();
  }, []);

  const display = () => {
    if (noCats) {
      return <NoCatsDisplay 
      setNoCats={setNoCats}
      setSelectedBreeds={setSelectedBreeds}
      setSelectedCharacteristics={setSelectedCharacteristics}
      />;
    } else if (selectedBreeds.length > 0) {
      return (
        <SelectedCats
          selectedCats={selectedBreeds}
          setSelectedBreeds={setSelectedBreeds}
          setSelectedCharacteristics={setSelectedCharacteristics}
        />
      );
    } else {    
      return (
        <ChooseCatDisplay
          selectedCharacteristics={selectedCharacteristics}
          setSelectedCharacteristics={setSelectedCharacteristics}
          breeds={breeds}
          setSelectedBreeds={setSelectedBreeds}
          setNoCats={setNoCats}
        />
      );
    }
  }

  return (
    <div>
      <Banner />

      {display()}
    </div>
  );
};

export default ChooseCat;
