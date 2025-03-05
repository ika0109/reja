function checkContent(a, b) {

  const tartiblaA = [...a].sort().join("");
  const tartiblaB = [...b].sort().join("");

 
  return tartiblaA === tartiblaB;
}


console.log(checkContent("mitgroup", "gmitroup"));

// const moment = require('moment');

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   sotish(oziq_ovqat, miqdor) {
//     const time = moment().format('HH:mm');

//     if (this[oziq_ovqat] >= miqdor) {
//       this[oziq_ovqat] -= miqdor;
//       return `hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola sotildi!`;
//     } else {
//       return `Yetarli ${oziq_ovqat} yo'q!`;
//     }
//   }

//   qabul(oziq_ovqat, soni) {
//     const time = moment().format('HH:mm');

//     this[oziq_ovqat] += soni;
//     return `hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola qabul qilindi!`;
//   }

//   qoldiq() {
//     const time = moment().format('HH:mm');

//     return `hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
//   }
// }

// const shop = new Shop(4, 5, 2);
// // console.log(shop.qoldiq());

// console.log(shop.sotish('non', 3));

// console.log(shop.qabul('cola', 4));

// console.log(shop.qoldiq());

// function countDigits(str) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//       if (str[i] >= '0' && str[i] <= '9') {
//         count++;
//       }
//     }

//     return count;
//   }

//   console.log(countDigits("ad2a54y79wet0sfgb9"));

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
