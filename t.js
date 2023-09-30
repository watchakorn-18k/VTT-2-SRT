test = ['WEBVTT\r', '\r', '00:00:31.460 --> 00:00:33.100\r', '♪ ดนตรีแห่งการผจญภัย ♪\r','00:01:43.860 --> 00:01:50.140\r', '♪การเริ่มต้นใหม่อยู่ที่นี่♪\r', '\r', '00:01:51.700 --> 00:02:02.020\r', '[เชฟมหัศจรรย์แห่งน้ำแข็งและไฟ S2]\r',]

// let result = [];

// for (let i = 0; i < test.length; i++) {
//     test[i] = test[i].replace('\r', '\n').replace('.', ',').replace('.', ',');
//     console.log(test[i]);
//     if (test[i].startsWith('00')) {
//       result.push(test.slice(i, i + 2).join('') + '\n\n');
//     }
//   }

// let resultString = result.join("");
// console.log(resultString);


const array = ['a', 'b'];

if (array.includes('a')) {
  console.log('wow');
}