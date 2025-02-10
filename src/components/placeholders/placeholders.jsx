import "./placeholders.scss";

function Placeholders() {
  return (
    <div className="placeholders">
      <img
        src="./teamplaceholder.png"
        alt="Team 1"
        className="placeholder-team-logo"
      />
      <img
        src="./playerplaceholder.png"
        alt="Team 1"
        className="placeholder-player-image"
      />
    </div>
  );
}

export default Placeholders;
