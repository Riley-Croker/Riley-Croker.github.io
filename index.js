  // PLAYER DATA
  const playersData = [
    { name: "Dr. Mundo", team: "Dr Mundo’s Maulers", kda: "9.13", kills: 46, deaths: 9, assists: 40, cs: 570 },
    { name: "Brand", team: "Dr Mundo’s Maulers", kda: "3.12", kills: 45, deaths: 19, assists: 27, cs: 603 },
    { name: "Ashe", team: "Dr Mundo’s Maulers", kda: "2.32", kills: 22, deaths: 24, assists: 38, cs: 469 },
    { name: "Soraka", team: "Dr Mundo’s Maulers", kda: "2.15", kills: 2, deaths: 21, assists: 49, cs: 275 },
    { name: "Renekton", team: "Renekton’s Rampage", kda: "0.47", kills: 2, deaths: 23, assists: 11, cs: 307 },
    { name: "Galio", team: "Renekton’s Rampage", kda: "0.93", kills: 12, deaths: 20, assists: 9, cs: 418 },
    { name: "Miss Fortune", team: "Renekton’s Rampage", kda: "0.4", kills: 9, deaths: 28, assists: 2, cs: 423 },
    { name: "Sivir", team: "Renekton’s Rampage", kda: "0.71", kills: 17, deaths: 29, assists: 8, cs: 619 },
    { name: "Tristana", team: "Tristana’s Terror", kda: "1.5", kills: 7, deaths: 23, assists: 30, cs: 289 },
    { name: "Garen", team: "Tristana’s Terror", kda: "2.92", kills: 26, deaths: 13, assists: 17, cs: 414 },
    { name: "Lux", team: "Tristana’s Terror", kda: "3.21", kills: 27, deaths: 16, assists: 40, cs: 481 },
    { name: "Caitlyn", team: "Tristana’s Terror", kda: "1.78", kills: 23, deaths: 27, assists: 24, cs: 419 },
    { name: "Zilean", team: "Zilean’s Zodiac Warriors", kda: "2.6", kills: 8, deaths: 16, assists: 24, cs: 298 },
    { name: "Cassiopeia", team: "Zilean’s Zodiac Warriors", kda: "8.33", kills: 18, deaths: 5, assists: 8, cs: 301 },
    { name: "Malphite", team: "Zilean’s Zodiac Warriors", kda: "4.25", kills: 14, deaths: 6, assists: 8, cs: 328 },
    { name: "Trundle", team: "Zilean’s Zodiac Warriors", kda: "10.5", kills: 12, deaths: 6, assists: 14, cs: 237 },
    { name: "Warwick", team: "Warwick’s Warpath", kda: "1.41", kills: 10, deaths: 24, assists: 16, cs: 289 },
    { name: "Annie", team: "Warwick’s Warpath", kda: "2.45", kills: 9, deaths: 19, assists: 21, cs: 268 },
    { name: "Veigar", team: "Warwick’s Warpath", kda: "2.93", kills: 33, deaths: 18, assists: 14, cs: 524 },
    { name: "Wukong", team: "Warwick’s Warpath", kda: "2.78", kills: 7, deaths: 14, assists: 22, cs: 262 },
    { name: "Amumu", team: "Amumu’s Avengers", kda: "3.33", kills: 10, deaths: 11, assists: 42, cs: 296 },
    { name: "Blitzcrank", team: "Amumu’s Avengers", kda: "7.8", kills: 14, deaths: 8, assists: 31, cs: 234 },
    { name: "Jax", team: "Amumu’s Avengers", kda: "4.25", kills: 25, deaths: 11, assists: 25, cs: 372 },
    { name: "Kayle", team: "Amumu’s Avengers", kda: "2.85", kills: 34, deaths: 16, assists: 25, cs: 470 },
    { name: "Kog’maw", team: "Kog’maw’s Killers", kda: "2.08", kills: 17, deaths: 17, assists: 23, cs: 389 },
    { name: "Karthus", team: "Kog’maw’s Killers", kda: "1.72", kills: 16, deaths: 21, assists: 23, cs: 457 },
    { name: "Ziggs", team: "Kog’maw’s Killers", kda: "1.63", kills: 20, deaths: 18, assists: 16, cs: 621 },
    { name: "Shen", team: "Kog’maw’s Killers", kda: "2.27", kills: 5, deaths: 11, assists: 29, cs: 282 },
    { name: "Cho’gath", team: "Cho’gath Champions", kda: "1.83", kills: 19, deaths: 15, assists: 14, cs: 390 },
    { name: "Ezreal", team: "Cho’gath Champions", kda: "2.22", kills: 33, deaths: 25, assists: 18, cs: 520 },
    { name: "Leona", team: "Cho’gath Champions", kda: "2.58", kills: 9, deaths: 17, assists: 28, cs: 222 },
    { name: "Master Yi", team: "Cho’gath Champions", kda: "0.81", kills: 13, deaths: 39, assists: 21, cs: 340 }
  ];

  // GAME DATA
  /*
    Teams: 
      Amumu’s Avengers
      Cho’gath Champions
      Dr Mundo’s Maulers
      Kog’maw’s Killers
      Renekton’s Rampage
      Tristana’s Terror
      Warwick’s Warpath
      Zilean’s Zodiac Warriors

    Format:
      "March 7th G1": { winner: "Dr Mundo’s Maulers", loser: "Renekton’s Rampage" },
  */
  const gameData = {
    "March 6th G1": { winner: "Dr Mundo’s Maulers", loser: "Renekton’s Rampage" },
    "March 6th G2": { winner: "Zilean’s Zodiac Warriors", loser: "Tristana’s Terror" },
    "March 6th G3": { winner: "Amumu’s Avengers", loser: "Warwick’s Warpath" },
    "March 6th G4": { winner: "Cho’gath Champions", loser: "Kog’maw’s Killers" },
    "March 7th G1": { winner: "Amumu’s Avengers", loser: "Kog’maw’s Killers" },
    "March 7th G2": { winner: "Warwick’s Warpath", loser: "Cho’gath Champions" },
    "March 7th G3": { winner: "Zilean’s Zodiac Warriors", loser: "Renekton’s Rampage" },
    "March 7th G4": { winner: "Dr Mundo’s Maulers", loser: "Tristana’s Terror" },
    "March 13th G1": { winner: "Amumu’s Avengers", loser: "Renekton’s Rampage" },
    "March 13th G2": { winner: "Dr Mundo’s Maulers", loser: "Warwick’s Warpath" },
    "March 13th G3": { winner: "Kog’maw’s Killers", loser: "Zilean’s Zodiac Warriors" },
    "March 13th G4": { winner: "Tristana’s Terror", loser: "Cho’gath Champions" }
  }

  // TEAM DATA
  var teamData = {
    "Amumu’s Avengers": { wins: 0, losses: 0, captain: "Amumu", player1: "Blitzcrank", player2: "Jax", player3: "Kayle", nextMatch: "Tristana’s Terror", nextMatchDate: "March 14th" },
    "Cho’gath Champions": { wins: 0, losses: 0, captain: "Cho’gath", player1: "Ezreal", player2: "Leona", player3: "Master Yi", nextMatch: "Zilean’s Zodiac Warriors", nextMatchDate: "March 14th" },
    "Dr Mundo’s Maulers": { wins: 0, losses: 0, captain: "Dr. Mundo", player1: "Brand", player2: "Soraka", player3: "Ashe", nextMatch: "Kog’maw’s Killers", nextMatchDate: "March 14th" },
    "Kog’maw’s Killers": { wins: 0, losses: 0, captain: "Kog’maw", player1: "Karthus", player2: "Ziggs", player3: "Shen", nextMatch: "Dr Mundo’s Maulers", nextMatchDate: "March 14th" },
    "Renekton’s Rampage": { wins: 0, losses: 0, captain: "Renekton", player1: "Galio", player2: "Miss Fortune", player3: "Sivir", nextMatch: "Warwick’s Warpath", nextMatchDate: "March 14th" },
    "Tristana’s Terror": { wins: 0, losses: 0, captain: "Tristana", player1: "Garen", player2: "Lux", player3: "Caitlyn", nextMatch: "Amumu’s Avengers", nextMatchDate: "March 14th" },
    "Warwick’s Warpath": { wins: 0, losses: 0, captain: "Warwick", player1: "Annie", player2: "Veigar", player3: "Wukong", nextMatch: "Renekton’s Rampage", nextMatchDate: "March 14th" },
    "Zilean’s Zodiac Warriors": { wins: 0, losses: 0, captain: "Zilean", player1: "Cassiopeia", player2: "Malphite", player3: "Trundle", nextMatch: "Cho’gath Champions", nextMatchDate: "March 14th" }
  };

  function calculateTeamData() {
    var winner = "";
    var loser = "";
    for (var key in gameData) {
        if (gameData.hasOwnProperty(key)) {
            winner = gameData[key].winner;
            loser = gameData[key].loser;

            if (teamData.hasOwnProperty(winner)) {              
              teamData[winner].wins++;
            }

            if (teamData.hasOwnProperty(loser)) {              
              teamData[loser].losses++;
            }
        }
    }
  }

// Function to populate the table with player data
function populatePlayerTable() {
  const tableBody = document.getElementById("player-table-body");

  // Sort playersData by KDA, then by kills, and finally by name
  playersData.sort((a, b) => {
    if (parseFloat(b.kda) !== parseFloat(a.kda)) {
      return parseFloat(b.kda) - parseFloat(a.kda); // Sort by KDA descending
    } else if (b.kills !== a.kills) {
      return b.kills - a.kills; // Sort by kills descending
    } else {
      return a.name.localeCompare(b.name); // Sort by name alphabetically
    }
  });

  playersData.forEach((player, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${player.name}</td>
      <td class="team-${player.team.replace(/\s+/g, '-')}">${player.team}</td>
      <td>${player.kda}</td>
      <td>${player.kills}</td>
      <td>${player.deaths}</td>
      <td>${player.assists}</td>
      <td>${player.cs}</td>
    `;
    
    if(tableBody != null) {
      tableBody.appendChild(row);
    }
  });
}

// Function to calculate team stats
function calculateAndSortTeamStats() {
  const teamStats = {};

  // Initialize team stats object
  playersData.forEach(player => {
    const team = player.team;
    if (!teamStats[team]) {
      teamStats[team] = { kda: 0, kills: 0, deaths: 0, assists: 0, cs: 0, playerCount: 0 };
    }
    // Add player stats to team stats
    teamStats[team].kda += parseFloat(player.kda);
    teamStats[team].kills += player.kills;
    teamStats[team].deaths += player.deaths;
    teamStats[team].assists += player.assists;
    teamStats[team].cs += player.cs;
    teamStats[team].playerCount++;
  });

  // Convert team stats object to array for sorting
  const sortedTeams = Object.entries(teamStats).map(([team, stats]) => ({
    team,
    wins: teamData[team].wins,
    losses: teamData[team].losses,
    avgKda: isNaN(stats.kda / stats.playerCount) ? 0 : stats.kda / stats.playerCount,
    kills: stats.kills,
    deaths: stats.deaths,
    assists: stats.assists,
    cs: stats.cs
  })).sort((a, b) => {
    // Sort by wins descending
    if (a.wins !== b.wins) return b.wins - a.wins;
    // If wins are equal, sort by losses ascending
    if (a.losses !== b.losses) return a.losses - b.losses;
    // If losses are equal, sort by avgKda descending
    if (b.avgKda !== a.avgKda) return b.avgKda - a.avgKda;
    // If avgKda is equal, sort by team name ascending
    return a.team.localeCompare(b.team);
  });

  // Create and populate the table
  const tableBody = document.getElementById("team-stats-body");

  if(tableBody != null) {
    sortedTeams.forEach(({ team, wins, losses, avgKda, kills, deaths, assists, cs }) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td class="team-${team.replace(/\s+/g, '-')}">${team}</td>
        <td>${wins}</td>
        <td>${losses}</td>
        <td>${avgKda.toFixed(2)}</td>
        <td>${kills}</td>
        <td>${deaths}</td>
        <td>${assists}</td>
        <td>${cs}</td>
      `;
        tableBody.appendChild(row);
    });
  }

  // Create and populate the teams tab table
  const teamsTableBody = document.getElementById("team-standings-body");

  if(teamsTableBody != null) {
    var teams = `<div class="header-team">Team</div>
                 <div class="header-record">Record</div>`
    var i = 0;
    sortedTeams.forEach(({ team, wins, losses }) => {
      i++;
      teams += `
      <div class="team"><span class="num">${i}.</span> ${team}</div>
      <div class="record">${wins}-${losses}</div>
      `;
    });

    teamsTableBody.innerHTML = teams;
  }
}

// Function to populate the team cards
function populateTeamCards() {
  const tableBody = document.getElementById("team-cards");

  var teams = Object.keys(teamData);
  var teamStats;
  var teamInnerHtml = "";
  var previousGames = "";

  if(tableBody != null) {
    teams.forEach((team) => {
      teamStats = teamData[team];
      previousGames = "";

      for (var key in gameData) {
        if (gameData.hasOwnProperty(key)) {
            winner = gameData[key].winner;
            loser = gameData[key].loser;

            if (team === winner) {
              previousGames += `
              <p style="padding-left: 20px">Beat ${loser} on ${key.substring(0, key.length-3)}</p>`;
            }

            if (team === loser) {
              previousGames += `
              <p style="padding-left: 20px">Lost to ${winner} on ${key.substring(0, key.length-3)}</p>`;
            }
        }
      }

      if (previousGames !== "") {
        previousGames = `<p style="padding-top: 10px">Game History:</p>` + previousGames;
      }

      teamInnerHtml += `
        <div class="team-card">
          <button class="team-dropdown">${team}</button>
          <div class="team-info">
            <p>Record: ${teamStats.wins}-${teamStats.losses}</p>
            <p>Captain: ${teamStats.captain}</p>
            <p>Players:</p>
            <ul>
              <li>${teamStats.player1}</li>
              <li>${teamStats.player2}</li>
              <li>${teamStats.player3}</li>
            </ul>
            <p>Next Game:</p>
            <p style="padding-left: 20px">${teamStats.nextMatch} on ${teamStats.nextMatchDate}, 2024</p>
            ${previousGames}
          </div>
        </div>
        `;
    });
        
    tableBody.innerHTML = teamInnerHtml;
  }
}

// Calling functions 
calculateTeamData();
populateTeamCards();
populatePlayerTable();
calculateAndSortTeamStats();


document.querySelectorAll('.team-dropdown').forEach(item => {
    item.addEventListener('click', event => {
      const teamCard = event.target.closest('.team-card');
      teamCard.classList.toggle('active');
    });
  });