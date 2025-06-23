// Function to calculate and display boda fare based on distance
function calculateBodaFare(distanceInKilometers) {
    const baseFare = 50; // Base fare in local currency (KES)
    const farePerKilometer = 15; // Fare per kilometer in local currency (KES)
    const distance = Number(distanceInKilometers); // Ensure input is a number
    const actualFare = distance * farePerKilometer; // Calculate fare for the distance
    const totalFare = actualFare + baseFare; // Total fare including base fare

    // Display breakdown of fare to the user
    console.log(`Ukokwote ni ${distance}km :`);
    console.log(`Ukikalia Pikipiki : KES${baseFare}`);
    console.log(`Mpaka Uko: KES${actualFare}`);
    console.log(`Total: KES${totalFare}`);
    console.log(`Panda Pikipiki`);
}
const UserInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
const distanceInKilometers = parseInt(UserInput);
if (isNaN(distanceInKilometers) || distanceInKilometers <= 0) {
    console.log("Tafadhali weka umbali halali kwa kilomita."); // Invalid input message
} else {
    calculateBodaFare(distanceInKilometers); // Calculate fare if input is valid
}
// Please enter a valid distance in kilometers.