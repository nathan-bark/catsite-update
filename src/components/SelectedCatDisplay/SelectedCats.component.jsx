import './SelectedCats.styles.scss'

import Button from "../Button/Button.component";

const SelectedCats = ({ selectedCats, setSelectedBreeds, setSelectedCharacteristics }) => {

  const handleStartOver = () => {
    setSelectedBreeds([]);
    setSelectedCharacteristics([]);
  };
    

  return (
    <div className='results'>
      <Button buttonText={"Start Over"} onClick={handleStartOver}></Button>
      <h2 className='cat-results-title'>We found {selectedCats.length} cat{selectedCats.length > 1 && "s"} for you!</h2>

      {selectedCats.map((cat) => (
        <div key={cat.id}>
          <h3>{cat.name}</h3>
          <p className='result-description'>{cat.description}</p>
          <p className='result-temperament'>{cat.temperament}</p>
          {cat.image ? <img src={cat.image.url} alt={cat.name} /> : null}
        </div>
      ))}
    </div>
  );
};

export default SelectedCats;
