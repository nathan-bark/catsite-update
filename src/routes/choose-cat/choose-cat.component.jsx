import React, { useEffect, useState } from "react";

import "./choose-cat.styles.scss";

import Banner from "../../components/Banner/Banner.component";
import SelectedCats from "../../components/SelectedCatDisplay/SelectedCats.component";
import ChooseCatDisplay from "../../components/ChooseCatDisplay/chooseCatDisplay.component";

const ChooseCat = () => {
  const apiKey =
    "?api_key=live_XWfF1hEAWjI9hbq2bCYKA3h7ysvOZeOP55FLXlKc8PmIdbWv0NbLq8QPxssSj1XT";
  const baseUrl = `https://api.thecatapi.com/v1/breeds`;
  const fetchUrl = `${baseUrl}${apiKey}`;

  const [breeds, setBreeds] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);

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

 

  return (
    <div>
      <Banner />

      {selectedBreeds.length > 0 ? (
        <SelectedCats
          selectedCats={selectedBreeds}
          setSelectedBreeds={setSelectedBreeds}
          setSelectedCharacteristics={setSelectedCharacteristics}
        />
      ) : (
        <ChooseCatDisplay
          selectedCharacteristics={selectedCharacteristics}
          setSelectedCharacteristics={setSelectedCharacteristics}
          breeds={breeds}
          setSelectedBreeds={setSelectedBreeds}
        />
      )}
    </div>
  );
};

export default ChooseCat;
