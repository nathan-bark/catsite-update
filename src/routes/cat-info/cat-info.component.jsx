import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner.component";
import "./cat-info.styles.scss";

const CatInfo = () => {
  const apiKey =
    "?api_key=live_XWfF1hEAWjI9hbq2bCYKA3h7ysvOZeOP55FLXlKc8PmIdbWv0NbLq8QPxssSj1XT";
  const baseUrl = `https://api.thecatapi.com/v1/breeds`;
  const fetchUrl = baseUrl + apiKey;

  const [breeds, setBreeds] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedWiki, setSelectedWiki] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setBreeds(data);
      })
      .catch((error) => {
        console.error("Error fetching cat breeds:", error);
      });
  }, []);

  useEffect(() => {
    if (breeds.length > 0) {
      showInfo(breeds[0].id);
    }
  }, [breeds]);

  const showInfo = (value) => {
    const selectedBreed = breeds.find((breed) => breed.id === value);
    if (selectedBreed) {
      const { name, description, wikipedia_url, image } = selectedBreed;
      setSelectedName(name);
      setSelectedDescription(description);
      setSelectedWiki(wikipedia_url);
      setSelectedImage(image.url);
      console.log(
        selectedName,
        selectedDescription,
        selectedWiki,
        selectedImage
      );
      // Update the state or perform any other actions with the selected breed information
    }
  };

  return (
    <div>
      <Banner />

      <select
        onChange={(e) => showInfo(e.target.value)}
        name="breeds"
        id="breeds"
        className="breed-list"
      >
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>

      <div>
        <h2>{selectedName}</h2>
        <p>{selectedDescription}</p>
        <a href={selectedWiki} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
        <img src={selectedImage} alt={selectedName} />
      </div>
    </div>
  );
};

export default CatInfo;
