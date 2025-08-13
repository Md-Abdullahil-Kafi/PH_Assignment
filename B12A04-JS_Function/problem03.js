function bestTeam( player1, player2 ) {
if(typeof player1 === 'object' && typeof player2 === 'object' && !Array.isArray(player1) && !Array.isArray(player2) && player1 !== null && player2 !== null){
    let player1WrongPlay = player1.foul + player1.cardY + player1.cardR;
    let player2WrongPlay = player2.foul + player2.cardY + player2.cardR;

    if(player1WrongPlay > player2WrongPlay){
        return player2.name;
    }

    else if(player1WrongPlay === player2WrongPlay){
        return "Tie"
    }

    else{
       return player1.name;
    }

}
    return "Invalid"
}

