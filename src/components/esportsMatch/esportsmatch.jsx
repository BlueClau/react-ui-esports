import "./EsportsMatch.scss";

function EsportsMatch() {
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
          <strong>Country:</strong> RO 🇷🇴
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
          <span>Watch Live:</span>
          <a href="#" className="watch-link">
            🔗
          </a>
        </div>
      </div>
    </div>
  );
}

export default EsportsMatch;
