import Button from "../Button/Button.component";

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

const ChooseCatDisplay = ({setSelectedCharacteristics, selectedCharacteristics, breeds, setSelectedBreeds}) => {

    const handleCheckboxChange = (event) => {
        const { checked, value } = event.target;
        if (checked) {
          setSelectedCharacteristics([...selectedCharacteristics, value]);
        } else {
          setSelectedCharacteristics(
            selectedCharacteristics.filter((breed) => breed !== value)
          );
        }
      };

      const handleSubmit = () => {
        const filteredBreeds = breeds.filter((breed) => {
          return selectedCharacteristics.every((characteristic) =>
            breed.temperament.includes(characteristic)
          );
        });
        setSelectedBreeds(filteredBreeds);
      };


    return (
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
        </div>
      </div>
    )
}

export default ChooseCatDisplay;
