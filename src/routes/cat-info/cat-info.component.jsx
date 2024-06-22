import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner.component";
import "./cat-info.styles.scss";

/**
 * Renders the CatInfo component.
 * This component fetches cat breeds from an API and displays information about the selected breed.
 */
const CatInfo = () => {
  const apiKey =
    `?api_key=${process.env.REACT_APP_CAT_API_KEY}`;
  const baseUrl = `https://api.thecatapi.com/v1/breeds`;
  const fetchUrl = baseUrl + apiKey;

  const [breeds, setBreeds] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedTemperament, setSelectedTemperament] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedWiki, setSelectedWiki] = useState("");
  const [selectedImage, setSelectedImage] = useState("");


  //fetch cat breeds from the API
  //filter out breeds without images
  //set the breeds state
  //catch any errors
  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        data = data.filter((cat) => cat.image?.url != null);
        setBreeds(data);
      })
      .catch((error) => {
        console.error("Error fetching cat breeds:", error);
      });
  }, [fetchUrl]);


  //set state for the selected breed
  const showInfo = React.useCallback((value) => {
    const selectedBreed = breeds.find((breed) => breed.id === value);
    if (selectedBreed) {
      const { name, temperament, description, wikipedia_url, image } =
        selectedBreed;
      setSelectedName(name);
      setSelectedTemperament(temperament);
      setSelectedDescription(description);
      setSelectedWiki(wikipedia_url);
      setSelectedImage(image.url);
    }
  }, [breeds]);


  //show the first breed in the list when the component mounts
  useEffect(() => {
    if (breeds.length > 0) {
      showInfo(breeds[0].id);
    }
  }, [breeds, showInfo]);

  return (
    <div>
      <Banner />

      <select
        onChange={(e) => showInfo(e.target.value)}
        name="breeds"
        id="breeds"
        className="breed-list"
      >
        {/* map over the breeds array and display the breed name in the dropdown */}
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>

        {/* display the selected breed information */}
      <div className="description-text">
        <h2>{selectedName}</h2>
        <p className="info-temperament">{selectedTemperament}</p>
        <p>{selectedDescription}</p>
        <a href={selectedWiki} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
      <div className="info-img-container">
          <img src={selectedImage} alt={selectedName} className="info-pic" />
        </div>
    </div>
  );
};

export default CatInfo;
