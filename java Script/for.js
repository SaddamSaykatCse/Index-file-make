// var a = 2;

// // for (a = 2; a <= 100; a = a + 2) {
// //     console.log(a);
// // }

// for (i = 3; i <= 20; i = i + 2) {
//     console.log(i);
// }





// for (i = 2; i <= 30; i++) {

//     if (i > 7) {
//         break;
//     }
//     console.log(i);
// }

var number = [17, 18, 20, 14, 23, 26, 31, 87, 83, 95, 78, 41, 96, 12];
console.log(number.length);
number[3] = 27;
for (i = 0; i < number.length; i++) {
    Numbers = number[i];
    if (Numbers > 50) {
        continue;
    }
    console.log(Numbers);
}


