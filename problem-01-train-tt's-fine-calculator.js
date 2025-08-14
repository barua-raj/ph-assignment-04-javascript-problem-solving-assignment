// 🧮 জরিমানা নির্ধারণের নিয়ম:
// মোট জরিমানা = টিকিটের মূল ভাড়া + (২০% সারচার্জ) + অতিরিক্ত ৩০ টাকা সার্ভিস চার্জ
// 📥 Input:
// ফাংশনটি  একটি পজিটিভ সংখ্যা (number) ইনপুট নেবে  


// 🚀 Output:
// Input এর  ওপর ভিত্তি করে ফাংশনটি মোট  জরিমানা হিসাব করে একটি সংখ্যা return করবে
// Output দশমিক সংখ্যা হতে পারে। 
// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


// 🚩Challenge:  
// যদি ইনপুট টি number না হয়  অথবা  পজিটিভ সংখ্যা না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 



// 💡Hints:  যদি ইনপুট 200  হয়, তাহলে fine হবে: 200 + 200 × ( 20 / 100) + 30 = 270 Taka



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

