function calculateBodaFare (distanceInKilometers) {
    const baseFare = 50; // Base fare in local currency
    const farePerKilometer = 15; // Fare per kilometer in local currency
    const distance= number(distanceInKilometers)
    const actualFare = distance* farePerKilometer;
    const totalFare = actualFare + baseFare;

    console.log( `Ukokwote ni ${distance}km :`);
    console.log(`Ukikalia Pikipiki : KES${baseFare}`)
    console.log(`Mpaka Uko: KES${actualFare}`)
    console.log(`Total: KES${totalFare}`)
    console.log(`Panda Pikipiki`);
}
const UserInput = prompt (Unafika wapi Mkubwa?Kilometer ngapi?
    const distanceInKilometers = parseInt(UserInput);
if (isNaN(distanceInKilometers) || distanceInKilometers <= 0) {
    console.log("Tafadhali weka umbali halali kwa kilomita.");
} else {
    calculateBodaFare(distanceInKilometers);   
}
// Please enter a valid distance in kilometers.