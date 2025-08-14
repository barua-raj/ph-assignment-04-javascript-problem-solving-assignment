const team1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
const team2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };

function  bestTeam( player1, player2 ) {
    // You have to write your code here
    
    if (typeof player1 !== 'object' || typeof player2 !== 'object'){
        return "Invalid";
    }
    const player1Stats = player1.foul + player1.cardY + player1.cardR;
    const player2Stats = player2.foul + player2.cardY + player2.cardR;
    
    if (player1Stats < player2Stats) {
        return player1.name;
    }
    else if (player1Stats > player2Stats) {
        return player2.name;
    }
    else {
        return "Tie";
    }
}
const result = bestTeam(team1, team2);
console.log(result);