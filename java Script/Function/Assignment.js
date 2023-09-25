function make_avg(num1, num2, num3) {
    console.log(num1, num2, num3);

    var sum = num1 + num2 + num3;

    var sum_avg = sum / 3;

    return sum_avg;
}

var breakNumber = make_avg(25, 25, 25);
console.log(breakNumber);