  document.querySelectorAll('.team-dropdown').forEach(item => {
    item.addEventListener('click', event => {
      const teamCard = event.target.closest('.team-card');
      teamCard.classList.toggle('active');
    });
  });

  // Sample player data
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
    // Add more player data as needed
  ];

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

    tableBody.appendChild(row);
  });
}

// Call the function to populate the table
populatePlayerTable();

// Sample team data with wins and losses
const teamData = {
  "Dr Mundo’s Maulers": { wins: 0, losses: 0 },
  "Renekton’s Rampage": { wins: 0, losses: 0 },
  "Zilean’s Zodiac Warriors": { wins: 0, losses: 0 },
  "Tristana’s Terror": { wins: 0, losses: 0 },
  "Amumu’s Avengers": { wins: 0, losses: 0 },
  "Warwick’s Warpath": { wins: 0, losses: 0 },
  "Kog’maw’s Killers": { wins: 0, losses: 0 },
  "Cho’gath Champions": { wins: 0, losses: 0 }
};

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

// Call the function to calculate, sort, and populate team stats
calculateAndSortTeamStats();