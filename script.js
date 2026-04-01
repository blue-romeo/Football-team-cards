const footballTeam = {
    team: "HomeBoys FC",
    year: 2026,
    headCoach: "Jack Black",
    players:[
        {
            name: "Romeo Mkali",
            position: "forward",
            isCaptain: true
        },
        {
            name: "Robin Mnoma",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Ryan Mdeadly",
            position: "goalkeeper",
            isCaptain: false
        },{
            name: "James Mzito",
            position: "defender",
            isCaptain: false
        },{
            name: "Lucy Mofaya",
            position: "midfielder",
            isCaptain: false
        }
    ]
};

// displaying content
// team name
const teamName = document.getElementById("team");
teamName.innerText = footballTeam.team;

// Year
const year = document.getElementById("year");
year.innerText = footballTeam.year;

// Head Coach
const headCoach = document.getElementById("head-coach");
headCoach.innerText = footballTeam.headCoach;

//Player cards
const playerCards = document.getElementById("player-cards");
function displayCards(players){
playerCards.innerHTML = footballTeam.players.map((player) =>
{
    return `
    <div class="player-cards">
  <h2>${player.isCaptain ? "Captain" : ""} ${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>
    `
}).join('');
};

// display player cards on default
displayCards(footballTeam.players);

// making the dropdown menu functional
const dropdown = document.getElementById("players");

dropdown.addEventListener("change",
    ()=>{
        const selectedValue = dropdown.value;

        if (selectedValue=== "all"){
            displayCards(footballTeam.players);
        }else{
            const filteredPlayers = footballTeam.players.filter((player) => {
                return player.position === selectedValue;
                
            });
            displayCards(filteredPlayers);
        }
    }
)