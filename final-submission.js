function totalFine( fare ) {
    // You have to write your code here
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    const surchargePercent = 20;
    const serviceCharge = 30;
    const fine = fare + fare * (surchargePercent / 100) + serviceCharge;
    return fine;
}

function onlyCharacter( str ) {
    // You have to write your code here
    if ( typeof str !== 'string') {
        return "Invalid";
    }
    const removeWhiteSpaces = str.split(" ").join("");
    const convertToUpperCase = removeWhiteSpaces.toUpperCase();
    return convertToUpperCase;
}

function bestTeam( player1, player2 ) {
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

function isSame(arr1, arr2) {
    // You have to write your code here
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function resultReport( marks ) {
    // You have to write your code here
    
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }
    let scoreSum = 0;
    let passCount = 0;
    let failCount = 0;
    for (const num of marks) {
        scoreSum = scoreSum + num;
        if (num >= 40) {
            passCount = passCount + 1;
        }
        else {
            failCount = failCount + 1;
        }
    }
    let finalScore = Math.round(scoreSum / marks.length);
    return { finalScore: finalScore, pass: passCount, fail: failCount };
}