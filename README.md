## Chai ingridient calculator
This is a simple Javascript program that helps to calculate the number of chai cups a customer wants

## Description
This Prompts the user to enter the number of chai cups they want to make . 
Takes the numberOfCups (as a number) as an argument.
Calculates the required amount for each ingredient (water, milk, tea leaves, sugar) based on the numberOfCups.
Prints the results to the console in a clear, readable format.
Example Interaction (for an input of 3 cups):

## Example
User is prompted: Karibu! How many cups of Chai Bora would you like to make?
User enters: 3
Console Output:
To make 3 cups of Kenyan Chai, you will need:
Water: 600 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons

Enjoy your Chai Bora!

## bodaFareCalculator
simple program to estimate the fare for a boda boda ride.

## description
Fare Calculation Rules:
Base Fare: KES 50 (applied to every ride).
Per Kilometer Charge: KES 15 for every kilometer traveled.
Prompts the user to enter the distance of their trip in kilometers. Convert this input to a number.
Takes the distanceInKm (as a number) as an argument.
Calculates the total estimated fare using the formula: totalFare = baseFare + (distanceInKm * chargePerKm)
Prints the result to the console in a user-friendly format.
 ## Example 
Interaction (for a trip of 5 km):

User is prompted: Unafika wapi Mkubwa? Kilometer ngapi?:
User enters: 5
Console Output:
Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125

Panda Pikipiki!

## mobileMoneyEstimator
This is simplified estimator for transaction fees.

## description
Simplified Fee Structure:

The basic transaction fee is 1.5% of the transaction amount.
However, there's a minimum fee of KES 10. If 1.5% of the amount is less than KES 10, the fee charged is KES 10.
There's also a maximum fee of KES 70. If 1.5% of the amount is more than KES 70, the fee charged is KES 70.
Prompts the user to enter the amount of money they wish to send. Convert this input to a number.
Takes the amountToSend (as a number) as an argument.
Calculates the transaction fee based on the 1.5% rule, ensuring it adheres to the minimum (KES 10) and maximum (KES 70) fee limits.

## example
Example Interactions & Outputs:

User is prompted: Unatuma Ngapi? (KES):

Scenario 1: User enters 500

(1.5% of 500 = 7.5. Fee becomes KES 10 due to minimum.)
Console Output:
Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: KES 510

Send Money Securely!
