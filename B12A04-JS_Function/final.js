function totalFine( fare ) {
    if(typeof fare === 'number' && fare >= 0 ){
        let serviceCharge = (fare * 20) / 100;
        let fine = fare + serviceCharge + 30;
        return fine 
    }
    return 'Invalid'
}



function onlyCharacter( str ) {
    if(typeof str == 'string'){
       let strArray = str.split(' ');
       let joinStr = strArray.join('').toUpperCase();
       return joinStr;
    } 
    return 'Invalid'
}




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








function isSame(arr1 , arr2 ) {
    if(Array.isArray(arr1) && Array.isArray(arr2)){
        if(arr1.length !== arr2.length){
            return false;
        }
        let i = 0;
        while( i < arr1.length){
        if(arr1[i] !== arr2[i]){
            return false;
        }
        i++
        }
        return true;
    }
    return "Invalid"
}





function resultReport( marks ) {
    if(Array.isArray(marks)){
        if(marks.length === 0) return { finalScore: 0, pass: 0, fail: 0 };
        let finalScore = 0;
        let pass = 0;
        let fail = 0;
        for(const num of marks){
            if(num <= 40 ){
                fail = fail+1;
                finalScore = finalScore + num;
            }
            else {
                pass = pass + 1;
                finalScore = finalScore + num;
            }
        }
        let avg = finalScore / marks.length
        let finalOutput = { finalScore: Math.round(avg) , pass: pass, fail: fail }
        return finalOutput;
    }
    return "Invalid"
}

