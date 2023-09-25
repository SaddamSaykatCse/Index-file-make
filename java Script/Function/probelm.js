function probelm(namta) {

    console.log(namta);

    const borgue = namta * namta;

    return borgue;

}

for (i = 2; i <= 5; i++) {

    if (i <= 3) {
        continue;
    }
    const solveMath = probelm(4);

    console.log("Enter Ans:", solveMath);

}
