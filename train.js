// MITASK’larni train.js fileda yozasiz!

// yozish tartibingiz:

// Masalani izohi
// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.


// console.log("Jack Ma maslahatlari:");
// const list = [
//   "yaxsi talaba boling", //0=20
//   "togri boshliq tanlang va koproq xatoqiling", //20=30
//   "Ozingizga ishlashni boshlang ", //30=40
//   "Siz kuchlik bolgan narsalarni qiling", //40=50
//   "Yoshlarga investitsiya kiriting", // 50=60
//   "Endi dam oling foydasi yoq endi", // 60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     callback(null, list[5]);
//   }
// }

// maslahatBering(55, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });
// console.log('passed here: 0');
//     maslahatBering(65, (err, data) => {
// if (err) console.log('ERROR:', err);
// else {
//     console.log("javobi:", data)
// }
//     })
// console.log("passed here 1");

// console.log("Jack Ma maslahatlari:");
// const list = [
//   "yaxsi talaba boling", //0=20
//   "togri boshliq tanlang va koproq xatoqiling", //20=30
//   "Ozingizga ishlashni boshlang ", //30=40
//   "Siz kuchlik bolgan narsalarni qiling", //40=50
//   "Yoshlarga investitsiya kiriting", // 50=60
//   "Endi dam oling foydasi yoq endi", // 60
// ];
// ASYNC FUNCTION
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     // return list[5];
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(list[5]);
//         }, 5000);
//     })
//   }
// }

// CALL VIA => then/ catch
// console.log("passed here 0");
// mas1ahaftering(25)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1");


//asyn/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);

//   javob = await maslahatBering(70);
//   console.log(javob);

//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();
