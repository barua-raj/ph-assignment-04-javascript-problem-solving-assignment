const stuMarks = [98, 87, 67, 91, 92, 33, 87];
function  resultReport( marks ) {
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
const result = resultReport(stuMarks);
console.log(result);