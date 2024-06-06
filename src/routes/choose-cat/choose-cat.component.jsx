import React, { useEffect, useState } from "react";

import "./choose-cat.styles.scss";

import Banner from "../../components/Banner/Banner.component";
import Button from "../../components/Button/Button.component";
import SelectedCats from "../../components/SelectedCatDisplay/SelectedCatDisplay.component";

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

const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
        setSelectedCharacteristics([...selectedCharacteristics, value]);
    } else {
        setSelectedCharacteristics(selectedCharacteristics.filter((breed) => breed !== value));
    }
}

const handleSubmit = () => {
    const filteredBreeds = breeds.filter((breed) => {
        return selectedCharacteristics.every((characteristic) => breed.temperament.includes(characteristic));
    });
    setSelectedBreeds(filteredBreeds);
    console.log(filteredBreeds);
}

  const characteristicsArray = [
    "Active",
    "Affectionate",
    "Agile",
    "Curious",
    "Calm",
    "Clever",
    "Demanding",
    "Dependent",
    "Energetic",
    "Friendly",
    "Gentle",
    "Independent",
    "Intelligent",
    "Interactive",
    "Lively",
    "Loyal",
    "Outgoing",
    "Playful",
    "Patient",
    "Quiet",
    "Relaxed",
    "Social",
    "Sweet",
  ];
  return (
    <div>
      <Banner />

      <div className="characteristics-container">
        <h2>Characteristics</h2>

        <p>
          Choose the most important characteristics for your cat. 1 or 2 is
          recommended. Using 3 or more will lead to fewer results.
        </p>

        <div className="checkbox-container">
          {Array.from({ length: 23 }, (_, index) => (
            <div key={index} className="checkbox-item">
              <input
                type="checkbox"
                id={characteristicsArray[index]}
                name={characteristicsArray[index]}
                value={characteristicsArray[index]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={characteristicsArray[index]}>
                {characteristicsArray[index]}
              </label>
            </div>
          ))}
            <Button onClick={handleSubmit} buttonText={"Submit"}></Button>

            <SelectedCats selectedCats={selectedBreeds} />

        </div>
      </div>
    </div>
  );
};

export default ChooseCat;
