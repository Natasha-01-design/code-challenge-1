function estimateTransactionFee (amountToSend){
const ActualAmount= number(Amount);
const feeCharge= ActualAmount*0.015;


let fee ;
if (feeCharge <10){fee=10}
if else (feeCharge>70){fee=70}
const TotalAmount = ActualAmount+fee


console.log (`sending KES ${amountToSend}`)
console.log (`Calculated Transaction Fee:${fee}`)
console.log (`Total amount to be debited:KES ${TotalAmount}`)
console.log (`/nSend Money Securely!`)
}npm init -y
