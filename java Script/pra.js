var arr = [21, 22, 23, 29, 25, 27, 28, 29, 30, 29, 34, 50, 51, 57];
var inter = arr.indexOf(29);
console.log(inter);

// var char = [53, 54, 544, 68];
// char[2] = (1440);
// char.push(1080, 25, 1085, 23);
// console.log(char);
// // console.log(char);
// var solve = char.indexOf(1080);
// console.log(solve);

// var bit = [14, 15, 16, 17, 18];
// console.log(bit);
// bit.pop();
// console.log(bit);


// var com = (5 > 6);
// console.log(com);

// var com = (5 < 6);
// console.log(com);

// var com = (5 >= 6);
// console.log(com);


// var com = (5 <= 6);
// console.log(com);

// var com = (5 != 6);
// console.log(com);

// var com = (5 == 6);
// console.log(com);

// var phone = 170000;
// var me = 80000;

// if (phone > me) {
//     console.log("phone");
// }
// else {
//     console.log("false");
// }


// else if condition with voule and alphabet;

v = 'c';
if (v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u') {
    console.log("The char is Small Voule");
}
if (v == 'A' || v == 'E' || v == 'I' || v == 'O' || v == 'U') {
    console.log("The char is Big Voule");
}
else if (v => 'a' && v <= 'z') {
    console.log("The Char is small Alphabet");
}
else if (v >= 'A' && v <= 'Z') {
    console.log("The Char Is Big Alphabet");
}
else {
    console.log("False");
}


var con = "web";
var salary = 2000;
var car = 1;

if (con == "web" || (salary > 25000 && car == 1)) {
    console.log("Chakri Success");
}
else {
    console.log("Mara Kha");
}


// Problem Name Fruit Resarch:
var fruit = ["Apple", "Banana", "Orange"];
console.log(fruit);


// condition
var logo = fruit.indexOf("Banana");
console.log(logo);

// Replace Index

fruit[1] = "Mango"
console.log(fruit);


// Out value & In Vaue
fruit.pop()
fruit.push("Watermallon")
console.log(fruit);


// Grade Point Average
var score = 99;
if (score >= 90) {
    console.log("A+ Grade");
}
else if (score >= 80) {
    console.log("A Grade");
}
else if (score >= 60) {
    console.log("B Grade");
}
else if (score >= 50) {
    console.log("C Grade");
}
else if (score >= 40) {
    console.log("D Grade");
}

else if (score <= 39) {
    console.log("F Grade");
}



//  Big Number Find
var num1 = 13;
var num2 = 79;
var num3 = 45;
if (num1 >= num2 && num1 >= num3) {
    console.log("Number 1 Is Big");
}
else if (num2 >= num1 && num2 >= num3) {
    console.log("Number 2 Is Big");
}
else if (num3 >= num1 && num3 >= num2) {
    console.log("Number 3 is Big");
}

// traingle

var tri1 = 9;
var tri2 = 8;
var tri3 = 9;
if (tri1 == tri2 || tri1 == tri3) {
    console.log("The value Is true");
}
else if (tri2 == tri1 || tri2 == tri3) {
    console.log("The value Is true");
}
else {
    console.log("The ans is false");
}

var putNum1 = 25;
var putNum2 = 50;
var putNum3 = 100;
if (putNum1 >= 100) {
    console.log("The Frist Number is True");
}
else if (putNum2 >= 1000) {
    console.log("The Second Number is True");
}
else if (putNum3 >= 100) {
    console.log("The Third Number is true");
}


// While Loop

var even = 0;
var Odd = 1;
while (even <= 100) {
    // console.log("The Number Is Odd");
    console.log(even);
    // Same Line Per 1
    // fru = fru + 1;
    // fru = fru + 1;

    even = even + 2;

}
while (Odd <= 100) {
    console.log(Odd);

    Odd = Odd + 2;
}