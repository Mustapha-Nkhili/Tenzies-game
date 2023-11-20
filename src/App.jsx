import Die from "./component/Die";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Confetti from "./component/Confetti";
import "./App.css";

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  function allNewDice() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return numbers;
  }

  function holdDice(clickedDiceId) {
    setDice((prevDice) => {
      return prevDice.map((die) =>
        die.id === clickedDiceId ? { ...die, isHeld: !die.isHeld } : die
      );
    });
  }

  function roleDoce() {
    if (!tenzies) {
      const newDice = [];
      for (let i = 0; i < 10; i++) {
        if (dice[i].isHeld) {
          newDice.push(dice[i]);
        } else {
          newDice.push({
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
          });
        }
      }
      setDice(newDice);
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  useEffect(() => {
    const intialValue = dice[0].value;
    if (
      dice.every((dice) => dice.isHeld === true && dice.value === intialValue)
    ) {
      setTenzies(true);
    }
  }, [dice]);

  return (
    <main>
      <div className="tenzies-container">
        <div>
          <h1 className="title">Tenzies</h1>
          <p className="instructions">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className="dice-container">
          {tenzies && <Confetti tenzies={tenzies} />}
          {dice &&
            dice.map((die) => (
              <Die
                value={die.value}
                key={die.id}
                holdDice={() => holdDice(die.id)}
                isHeld={die.isHeld}
              />
            ))}
        </div>
        <input
          type="button"
          value={tenzies ? "New Game" : "Roll"}
          className="roll-dice-btn"
          onClick={roleDoce}
        />
      </div>
    </main>
  );
}
