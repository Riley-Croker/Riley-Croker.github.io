  // PLAYER DATA
  const playersData = [
    { name: "Dr. Mundo", team: "Dr Mundo’s Maulers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Brand", team: "Dr Mundo’s Maulers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Soraka", team: "Dr Mundo’s Maulers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Ashe", team: "Dr Mundo’s Maulers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Renekton", team: "Renekton’s Rampage", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Galio", team: "Renekton’s Rampage", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Miss Fortune", team: "Renekton’s Rampage", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Sivir", team: "Renekton’s Rampage", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Zilean", team: "Zilean’s Zodiac Warriors", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Cassiopeia", team: "Zilean’s Zodiac Warriors", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Malphite", team: "Zilean’s Zodiac Warriors", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Trundle", team: "Zilean’s Zodiac Warriors", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Tristana", team: "Tristana’s Terror", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Garen", team: "Tristana’s Terror", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Lux", team: "Tristana’s Terror", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Caitlyn", team: "Tristana’s Terror", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Amumu", team: "Amumu’s Avengers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Blitzcrank", team: "Amumu’s Avengers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Jax", team: "Amumu’s Avengers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Kayle", team: "Amumu’s Avengers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Warwick", team: "Warwick’s Warpath", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Annie", team: "Warwick’s Warpath", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Veigar", team: "Warwick’s Warpath", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Wukong", team: "Warwick’s Warpath", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Kog’maw", team: "Kog’maw’s Killers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Karthus", team: "Kog’maw’s Killers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Ziggs", team: "Kog’maw’s Killers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Shen", team: "Kog’maw’s Killers", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Cho’gath", team: "Cho’gath Champions", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Ezreal", team: "Cho’gath Champions", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Leona", team: "Cho’gath Champions", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 },
    { name: "Master Yi", team: "Cho’gath Champions", kda: "0", kills: 0, deaths: 0, assists: 0, cs: 0 }
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
      "February 28th G1": { winner: "Dr Mundo’s Maulers", loser: "Renekton’s Rampage" },
  */
  const gameData = {
  }

  // TEAM DATA
  var teamData = {
    "Amumu’s Avengers": { wins: 0, losses: 0, captain: "Amumu", player1: "Blitzcrank", player2: "Jax", player3: "Kayle", nextMatch: "Warwick’s Warpath", nextMatchDate: "February 28th" },
    "Cho’gath Champions": { wins: 0, losses: 0, captain: "Cho’gath", player1: "Ezreal", player2: "Leona", player3: "Master Yi", nextMatch: "Kog’maw’s Killers", nextMatchDate: "February 28th" },
    "Dr Mundo’s Maulers": { wins: 0, losses: 0, captain: "Dr. Mundo", player1: "Brand", player2: "Soraka", player3: "Ashe", nextMatch: "Renekton’s Rampage", nextMatchDate: "February 28th" },
    "Kog’maw’s Killers": { wins: 0, losses: 0, captain: "Kog’maw", player1: "Karthus", player2: "Ziggs", player3: "Shen", nextMatch: "Cho’gath Champions", nextMatchDate: "February 28th" },
    "Renekton’s Rampage": { wins: 0, losses: 0, captain: "Renekton", player1: "Galio", player2: "Miss Fortune", player3: "Sivir", nextMatch: "Dr. Mundo’s Maulers", nextMatchDate: "February 28th" },
    "Tristana’s Terror": { wins: 0, losses: 0, captain: "Tristana", player1: "Garen", player2: "Lux", player3: "Caitlyn", nextMatch: "Zilean's Zodiac Warriors", nextMatchDate: "February 28th" },
    "Warwick’s Warpath": { wins: 0, losses: 0, captain: "Warwick", player1: "Annie", player2: "Veigar", player3: "Wukong", nextMatch: "Amumu’s Avengers", nextMatchDate: "February 28th" },
    "Zilean’s Zodiac Warriors": { wins: 0, losses: 0, captain: "Zilean", player1: "Cassiopeia", player2: "Malphite", player3: "Trundle", nextMatch: "Tristana’s Terror", nextMatchDate: "February 28th" }
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