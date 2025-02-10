import React from "react";
import "./Matches.scss";

function MatchesPage() {
  const matches = [
    {
      id: 1,
      team1: "Natus Vincere",
      team2: "Team Liquid",
      date: "01.01.2025",
      game: "League of Legends",
      country: "ROU",
      logo1: "./navi.png",
      logo2: "./teamliquid.png",
      leagueLogo: "./eslproleague.png",
    },
    {
      id: 2,
      team1: "G2 Esports",
      team2: "Fnatic",
      date: "02.01.2025",
      game: "Counter-Strike 2",
      country: "GER",
      logo1: "./navi.png",
      logo2: "./teamliquid.png",
      leagueLogo: "./eslproleague.png",
    },
    {
      id: 3,
      team1: "Cloud9",
      team2: "FaZe Clan",
      date: "03.01.2025",
      game: "Valorant",
      country: "USA",
      logo1: "./navi.png",
      logo2: "./teamliquid.png",
      leagueLogo: "./eslproleague.png",
    },
    {
      id: 4,
      team1: "OG Esports",
      team2: "Evil Geniuses",
      date: "04.01.2025",
      game: "Dota 2",
      country: "EU",
      logo1: "./navi.png",
      logo2: "./teamliquid.png",
      leagueLogo: "./eslproleague.png",
    },
    {
      id: 5,
      team1: "T1",
      team2: "DRX",
      date: "05.01.2025",
      game: "League of Legends",
      country: "KOR",
      logo1: "./navi.png",
      logo2: "./teamliquid.png",
      leagueLogo: "./eslproleague.png",
    },
    {
      id: 6,
      team1: "Astralis",
      team2: "Heroic",
      date: "06.01.2025",
      game: "Counter-Strike 2",
      country: "DEN",
      logo1: "./navi.png",
      logo2: "./teamliquid.png",
      leagueLogo: "./eslproleague.png",
    },
  ];

  return (
    <div className="banners-container">
      {matches.map((match) => (
        <div key={match.id} className="match-banner">
          <div className="match-header">
            <img src={match.logo1} alt="Team 1" className="team-logo" />
            <span className="match-date">{match.date}</span>
            <img src={match.logo2} alt="Team 2" className="team-logo" />
          </div>
          <div className="match-info">
            <p className="team-names">
              <span className="team-name">{match.team1}</span> vs{" "}
              <span className="team-name">{match.team2}</span>
            </p>
            <p className="game-name">{match.game}</p>
            <p className="country">{match.country}</p>
          </div>
          <img src={match.leagueLogo} alt="League" className="league-logo" />
          <button className="see-more">See More</button>
          <span className="favorite">❤️</span>
        </div>
      ))}
    </div>
  );
}

export default MatchesPage;
