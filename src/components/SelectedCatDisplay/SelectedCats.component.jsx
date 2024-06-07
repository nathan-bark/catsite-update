import './SelectedCats.styles.scss'

import Button from "../Button/Button.component";

const SelectedCats = ({ selectedCats, setSelectedBreeds, setSelectedCharacteristics }) => {

  const handleStartOver = () => {
    setSelectedBreeds([]);
    setSelectedCharacteristics([]);
  };
    

  return (
    <div>
      <h2>We found {selectedCats.length} cats for you!</h2>

      <Button buttonText={"Start Over"} onClick={handleStartOver}></Button>

      {selectedCats.map((cat) => (
        <div key={cat.id}>
          <h3>{cat.name}</h3>
          <p>{cat.description}</p>
          <p>{cat.temperament}</p>
          {cat.image ? <img src={cat.image.url} alt={cat.name} /> : null}
        </div>
      ))}
    </div>
  );
};

export default SelectedCats;
