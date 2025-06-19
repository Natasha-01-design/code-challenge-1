// Function to calculate and display the required ingredients for chai
function calculateChaiIngredients(numberOfCups) {
    // Amounts per cup
    const water = 200; // ml per cup
    const milk = 50; // ml per cup
    const teaLeaves = 1; // tsp per cup
    const sugar = 2; // tsp per cup

    // Calculate total ingredients needed based on number of cups
    const totalWater = numberOfCups * water;
    const totalMilk = numberOfCups * milk;
    const totalTeaLeaves = numberOfCups * teaLeaves;
    const totalSugar = numberOfCups * sugar;

    // Display the calculated ingredients
    console.log(`To make ${numberOfCups} cups of chai, you will need:`);
    console.log(`${totalWater} ml of water`);
    console.log(`${totalMilk} ml of milk`);
    console.log(`${totalTeaLeaves} tsp of tea leaves`);
    console.log(`${totalSugar} tsp of sugar`);
    console.log("Enjoy your chai!");
}

// Prompt user for the number of cups
let userInput = prompt('Karibu! How many cups of Chai Bora would you like ?');
let numberOfCups = Number(userInput);

// Validate user input and call the function if valid
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.log("Please enter a valid number of cups.");
}
