let donutCounter = document.getElementById('donutCount');
let donutSubtract = document.getElementById('subtractDonut');
let counter = 0;
donutCounter.innerHTML = counter;
let numCount = document.getElementById("count-id");

// add one donut clicker
function addDonut() {
    ++counter;
    numCount.innerText = counter;
}
function subtractDonut() {
    --counter;
    if(counter>0){
    numCount.innerText = counter;}
    else{
        counter=0;
        numCount.innerText = counter;
    }
}

// let initialCost = 2;

// function calculateTotal() {
//     if(counter=0){
//         cost=0;
//        return cost.innerText
//     }
//     if(counter =1){
//         cost=
//         return 
//     }
//      = initialCost * Math.pow(1.1, counter - 1);
//     return cost;
// }

// console.log($ + calculateTotal);
