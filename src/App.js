import "./App.css";
import OptionImage from "./components/OptionImage";
import OptionButton from "./components/OptionButton";
import { useState, useMem, useEffect } from "react";
import ConfettiExplosion from '@reonomy/react-confetti-explosion';

function App() {
  const [isExploding, setIsExploding] = useState(false);
  const [userElement, setUserElement] = useState("null");
  const [computerElement, setComputerElement] = useState("null");
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState("-");

  const choices = ["fire", "tree", "water"];

  const handleSelect = (selected) => {
    console.log(userElement, "is userElement");
    setUserElement(selected);
    console.log(userElement, "user element after state update")
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    setComputerElement(choices[computerChoiceIndex]);
    console.log(computerElement,"computer element after state update")
    setDisabled(true);
  };

  useEffect(() => {
    if (computerElement === userElement) {
      setResult("-")
    } else {
      if (
        (computerElement === "fire" && userElement === "tree") ||
        (computerElement === "water" && userElement === "fire") ||
        (computerElement === "tree" && userElement === "water")
      ) {
        setResult("Computer won");
      }else{
        setResult("You won!");
        setIsExploding(true);
      }
    }
  }, [computerElement, userElement]);

  const handleRefresh = () => {
    setDisabled(false);
    console.log(userElement, computerElement);
    setResult("-")
    setComputerElement("null")
    setUserElement("null")
    setIsExploding(false);
  };

  return (
    <>
      <h1 className="text-center main">Fire, Water, Tree</h1>
        <div className="d-flex justify-content-center p-10">
        <OptionButton title="Play again" onClick={() => handleRefresh()} />
        </div>
      <div className="d-md-flex justify-content-around align-items-center text-center">
        <OptionImage element={userElement} />
        <div className="d-flex flex-column align-items-center justify-content-center">
        {isExploding && <ConfettiExplosion/>}
        <h1>{result}</h1>
        </div>
        <OptionImage element={computerElement} />
      </div>
      <div className="d-flex justify-content-around">
        <OptionButton title="Fire" onClick={() => handleSelect("fire")} disabled={disabled}/>
        <OptionButton title="Water" onClick={() => handleSelect("water")} disabled={disabled}/>
        <OptionButton title="Tree" onClick={() => handleSelect("tree")} disabled={disabled}/>
      </div>
    </>
  );
}

export default App;
