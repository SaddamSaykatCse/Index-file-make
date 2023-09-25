
// Function Algoritham COde to Do next

function data(data1, data2, data3) {
    console.log(data1, data2, data3);
    const value = data1 + data2 + data3;
    const ans = value / 3;

    return ans;
}



// Here We Doing Algoritham Find Out To call Functionx.
const data1Var = data(25, 25, 25);
const data2Var = data(30, 30, 30);
const data3Var = data(50, 50, 50);

const dataFlow = data(data1Var, data2Var, data3Var);

console.log("Enter Ans=", dataFlow);