const calcGasoline =() => {
    const price = document.querySelector("#price").value
const money = document.querySelector("#money").value
const answer = document.querySelector("#answer")

const gasAmount = (money/price).toFixed(2);
console.log(gasAmount);
let text;
if (gasAmount >= 10) { 
    text = "You could get about " + gasAmount +" liters, good, now you can escape!"
    } else {
        text = "You could get about ${gasAmount} liters, sorry, you have to stay!"}


answer.textContent= text;
}
/* 

    */
    /*
    gasAmount >= 10?  text = "You could get about " + gasAmount + " liters. Good, you can escape now." :
text = "You could get about " + gasAmount + " liters.Ups, you have to stay here."
*/
