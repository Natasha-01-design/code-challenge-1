function (calculateChaiIngridients) {
    const water = 200; // ml
    const milk = 50; // ml
    const teaLeaves(Majani); 1 // tsp
    const sugar(sukari) = 2; // tsp

    const totalWater = numberOfCups * water;
    const totalMilk = numberOfCups * milk;
    const totalTeaLeaves = numberOfCups * teaLeaves;
    const totalSugar = numberOfCups * sugar;

    console.log(`To make ${numberOfCups} cups of chai, you will need:`);
    console.log(`${totalWater} ml of water`);
    console.log(`${totalMilk} ml of milk`);
    console.log(`${totalTeaLeaves} tsp of tea leaves`);
    console.log(`${totalSugar} tsp of sugar`);
    console.log("Enjoy your chai!");
}
const UserInput = prompt('Karibu! How many cups of Chai Bora would you like ?');
const numberOfCups = parseInt(UserInput);
if (isNaN(numberOfCups) && numberOfCups <= 0) {
    calculateChaiIngridients(numberOfCups);
} else {
    console.log("Please enter a valid number of cups.");
}
