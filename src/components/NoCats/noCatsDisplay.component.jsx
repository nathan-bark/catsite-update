import './noCatsDisplay.styles.scss';
import Button from '../Button/Button.component';

const NoCatsDisplay = ({setNoCats, setSelectedBreeds, setSelectedCharacteristics }) => {

    const handleNoCatsStartOver = () => {
        setSelectedBreeds([]);
        setSelectedCharacteristics([]);
        setNoCats(false);
    }
  return (
    <div className="no-cats-display">

        <Button buttonText={"Start Over"} onClick={handleNoCatsStartOver}></Button>
      <h2>No cats match your criteria. Please try again.</h2>
      <img src="https://i.kym-cdn.com/entries/icons/mobile/000/026/489/crying.jpg" alt="crying cat" />
    </div>
  );
};

export default NoCatsDisplay;
