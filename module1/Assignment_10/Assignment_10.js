// module 1
const numDice = 3;
const targetSum = 15;
const numOfTimes = 10000;

let favorableOutcomes = 0;

for (let i = 0; i < numOfTimes; i++) {
    let sum = 0;
    for (let j = 0; j < numDice; j++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }

    if (sum === targetSum) {
        favorableOutcomes++;
    }
}

const probability = (favorableOutcomes / numOfTimes) * 100;
document.write(`Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`);
