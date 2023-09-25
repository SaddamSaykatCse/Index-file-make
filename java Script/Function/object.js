var basa = {

    fan: "1Ta",
    television: "1ta",
    charger: "ta",
    fridge: 1,
    table1: 2


}

const Total = Object.keys(basa);
console.log(Total);

const name1 = Object.values(basa)
console.log(name1);

for (var i = 0; i < Total.length; i++) {

    var eso = Total[i];

    var jou = basa[eso];

    console.log(eso, jou);

}