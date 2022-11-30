
//Dont forget to make function exportable
//function that returns random dice roll given number of sides
export function roll(sides, dice, rolls) {
    var totals = [];
 for (let i = 0; i < rolls; i++) {
    //# of times each dice is rolled
    var num =  Math.floor(Math.random() * sides) + 1;
    //accounting for additional dice
    for(let numDice = 1; numDice <= dice; numDice++){
        num += Math.floor(Math.random() * sides) + 1;
    }
    totals.push(num);
 }
var obj = {
    sides: sides,
    dice: dice,
    rolls: rolls,
    results: totals,
}
 
return JSON.stringify(obj);
}
