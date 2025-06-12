function estimateTransactionFee (amountToSend){
const ActualAmount= Number(Amount);
const feeCharge= ActualAmount*0.015;


let fee ;
if (feeCharge <10){fee=10;}
else if(feeCharge>70){fee=70;}
else{fee=feeCharge;}
const TotalAmount = ActualAmount+fee;


console.log (`sending KES ${ActualAmount}`);
console.log (`Calculated Transaction Fee:${fee}`);
console.log (`Total amount to be debited:KES ${TotalAmount}`);
console.log (`/nSend Money Securely!`);
}
const input =prompt ("unatuma ngapi? (KES):");
estimateTransactionFee(input);