import "./EsportsMatch.scss";

const EsportsMatch = () => {
  return (
    <div className="match-container">
      <div className="match-header">
        <p className="match-id">Match ID - 1234</p>
        <p className="match-time">01.01.2025 22:15 EST</p>
      </div>
      <div className="match-teams">
        <div className="team">
          <img
            src="./navi.png"
            alt="Natus Vincere Logo"
            className="team-logo"
          />
          <p className="team-name">Natus Vincere (NaVi)</p>
        </div>
        <div className="league-logo">
          <img src="./eslproleague.png" alt="ESL Pro League" />
        </div>
        <div className="team">
          <img
            src="./teamliquid.png"
            alt="Team Liquid Logo"
            className="team-logo"
          />
          <p className="team-name">Team Liquid (TLiQ)</p>
        </div>
      </div>
      <div className="match-details">
        <p>
          <strong>Country:</strong> RO
        </p>
        <p>
          <strong>Number of Matches:</strong> Best of 3
        </p>
        <p>
          <strong>Tier:</strong> A
        </p>
        <p className="prize">
          <strong>Prize:</strong> 1.000.000$
        </p>
        <p>
          <strong>Game:</strong> Counter Strike
        </p>
        <div className="watch-live">
          <button href="" className="watch-link">
            Watch Live
          </button>
        </div>
      </div>
      <div className="lineups">
        <h2>Lineups</h2>
        <div className="team-lineup">
          <h3>Natus Vincere (NaVi)</h3>
          <div className="players">
            <div className="player">
              <img src="./player.png" alt="Player 1" />
              <p>Player 1</p>
              <p>🇺🇦</p>
            </div>
            <div className="player">
              <img src="./player2.png" alt="Player 2" />
              <p>Player 2</p>
              <p>🇷🇺</p>
            </div>
            <div className="player">
              <img src="./player3.png" alt="Player 3" />
              <p>Player 3</p>
              <p>🇺🇦</p>
            </div>
            <div className="player">
              <img src="./player4.png" alt="Player 4" />
              <p>Player 4</p>
              <p>🇷🇺</p>
            </div>
            <div className="player">
              <img src="./player5.png" alt="Player 5" />
              <p>Player 5</p>
              <p>🇺🇦</p>
            </div>
          </div>
        </div>
        <div className="team-lineup">
          <h3>Team Liquid (TLiQ)</h3>
          <div className="players">
            <div className="player">
              <img src="./player5.png" alt="Player 1" />
              <p>Player 1</p>
              <p>🇺🇸</p>
            </div>
            <div className="player">
              <img src="./player3.png" alt="Player 2" />
              <p>Player 2</p>
              <p>🇨🇦</p>
            </div>
            <div className="player">
              <img src="./player2.png" alt="Player 3" />
              <p>Player 3</p>
              <p>🇳🇱</p>
            </div>
            <div className="player">
              <img src="./player.png" alt="Player 4" />
              <p>Player 4</p>
              <p>🇧🇷</p>
            </div>
            <div className="player">
              <img src="./player4.png" alt="Player 5" />
              <p>Player 5</p>
              <p>🇺🇸</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsportsMatch;
