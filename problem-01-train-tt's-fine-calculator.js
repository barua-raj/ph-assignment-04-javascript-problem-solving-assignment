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
const result = totalFine(19911);
console.log(result);
console.log(typeof result);

