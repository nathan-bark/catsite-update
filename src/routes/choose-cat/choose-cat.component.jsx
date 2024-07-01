import React, { useEffect, useState } from "react";

import "./choose-cat.styles.scss";

import Banner from "../../components/Banner/Banner.component";
import SelectedCats from "../../components/SelectedCatDisplay/SelectedCats.component";
import ChooseCatDisplay from "../../components/ChooseCatDisplay/chooseCatDisplay.component";
import NoCatsDisplay from "../../components/NoCats/noCatsDisplay.component";

/**
 * Renders the ChooseCat component.
 * This component fetches cat breeds from an API and allows users to select their preferred cat breeds and characteristics.
 */
const ChooseCat = () => {
  /**
   * API key for accessing the cat API.
   * @type {string}
   */
  const apiKey =
    `?api_key=${process.env.REACT_APP_CAT_API_KEY}`;
  const baseUrl = `https://api.thecatapi.com/v1/breeds`;
  const fetchUrl = baseUrl + apiKey;

  //states for the component
  const [breeds, setBreeds] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);
  const [noCats, setNoCats] = useState(false);

  //fetch cat breeds from the API
  //set the breeds state
  //catch any errors
  useEffect(() => {
    console.log(apiKey);
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
  }, [fetchUrl, apiKey]);

  const display = () => {
    //display the appropriate component based on the state
    //if there are no matching cats, display the NoCatsDisplay component
    if (noCats) {
      return <NoCatsDisplay 
      setNoCats={setNoCats}
      setSelectedBreeds={setSelectedBreeds}
      setSelectedCharacteristics={setSelectedCharacteristics}
      />;
      //if there are matching breeds, display the SelectedCats component
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
