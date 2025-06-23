
// Function to estimate the transaction fee for sending money
function estimateTransactionFee(amountToSend) {
    // Convert the input to a number in case it's a string
    const ActualAmount = Number(amountToSend);

    // Calculate the fee as 1.5% of the amount
    const feeCharge = ActualAmount * 0.015;

    let fee;
    // Ensure the fee is at least 10 and at most 70
    if (feeCharge < 10) {
        fee = 10; // Minimum fee
    } else if (feeCharge > 70) {
        fee = 70; // Maximum fee
    } else {
        fee = feeCharge; // Fee within allowed range
    }

    // Calculate the total amount to be debited
    const TotalAmount = ActualAmount + fee;

    // Output the details to the console
    console.log(`sending KES ${ActualAmount}`);
    console.log(`Calculated Transaction Fee: ${fee}`);
    console.log(`Total amount to be debited: KES ${TotalAmount}`);
    console.log(`\nSend Money Securely!`);
}

let input;
if (typeof prompt === "function") {
    input = prompt("unatuma ngapi? (KES):");
    estimateTransactionFee(input);
} else {
    // Node.js fallback: read from command line
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question("unatuma ngapi? (KES): ", (answer) => {
        estimateTransactionFee(answer);
        readline.close();
    });
}
