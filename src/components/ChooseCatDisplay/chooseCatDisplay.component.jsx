import React, { useState } from "react";

import "./chooseCatComponent.styles.scss";

import Button from "../Button/Button.component";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
} from "@mui/material";

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ChooseCatDisplay = ({
  setSelectedCharacteristics,
  setNoCats,
  selectedCharacteristics,
  breeds,
  setSelectedBreeds,
}) => {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleClose = () => {
    setAlertOpen(false);
  };

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
    if (selectedCharacteristics.length === 0) {
      setAlertOpen(true);
      return;
    }
    const filteredBreeds = breeds.filter((breed) => {
      return selectedCharacteristics.every((characteristic) =>
        breed.temperament.includes(characteristic)
      );
    });
    if (filteredBreeds.length === 0) {
      setNoCats(true);
      return;
    }
    setSelectedBreeds(filteredBreeds);
  };

  return (
    <div className="characteristics-container">
      {alertOpen && (
        <Dialog
          open={alertOpen}
          onClose={handleClose}
          TransitionComponent={Transition}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            sx={{
              backgroundColor: "#850e35",
              color: "#fff5e4",
            }}
          >
            {"No Characteristics Selected!"}
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: "#850e35" }}>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ color: "#fff5e4" }}
            >
              Please select at least one characteristic!
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
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
      </div>
      <Button
        onClick={handleSubmit}
        buttonText={"Submit"}
        className="submit-btn"
      ></Button>
    </div>
  );
};

export default ChooseCatDisplay;
