export default function Die({ value, holdDice, isHeld }) {
  return (
    <span
      className="dice"
      onClick={holdDice}
      style={{ backgroundColor: isHeld ? "#59E391" : "white" }}
    >
      {value}
    </span>
  );
}
