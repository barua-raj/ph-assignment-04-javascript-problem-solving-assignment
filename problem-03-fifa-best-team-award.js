// Problem-03 : FIFA Best Team Award 
// ⚠️ Function Name Must be bestTeam()
// ফুটবল খেলার মাঠে শুধু গোল নয়, ফাউল, হলুদ কার্ড, লাল কার্ডও খুব গুরুত্বপূর্ণ! 
// দুইটি দল খেলেছে—তারা কে কত ফাউল করেছে, কয়টা হলুদ কার্ড ও লাল কার্ড পেয়েছে তা দেখে বিচারক ঠিক করবে কে বেশি ফেয়ার প্লে করেছে। তোমার কাজ হচ্ছে একটি ফাংশন বানানো, যার নাম হবে bestTeam(). এই ফাংশনটি দুইটি দলের খেলার রিপোর্ট (object আকারে) ইনপুট হিসেবে নেবে আর রিটার্ন করবে সেই দলের নাম যে সবচেয়ে কম নিয়ম ভেঙেছে অর্থাৎ বেশি ফেয়ার ছিল।  
// 👉 যেই দলের  foul + redCard + yellowCard এর পরিমান  কম → সেই দল বেশি ফেয়ার

// 📥 Input:
// ফাংশনটি ২টা object ইনপুট নেবে। প্রতিটা object-এ নিচের ৪টি property থাকবে:
// name: দলের নাম (string)
// foul: কতবার ফাউল হয়েছে (number)
// cardY: হলুদ কার্ড সংখ্যা (number)
// cardR: লাল কার্ড সংখ্যা (number)


// 🚀 Output:
// যেই দলের (foul + cardY + cardR ) কম → সে দলের name property এর ভ্যালু  return করবে
// দুই দলের (foul + cardY + cardR ) সমান হলে → return করবে "Tie"

// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


// 🚩Challenge:  যদি ইনপুট গুলো  Object না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 






// SAMPLE INPUT
// SAMPLE OUTPUT (string) 
// { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
// { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
// Brazil
// { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
// { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
// Tie
// { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
// { name: "France", foul: 10, cardY: 2, cardR: 1 }
// Germany
// { name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"


// Invalid


// নিচের কোড স্নিপেট টি কপি করো এবং ফাংশন টি কে উপরের রিকোয়ারমেন্ট অনুযায়ী কমপ্লিট করো।  
// function  bestTeam( player1, player2 ) {
//           // You have to write your code here
// }


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