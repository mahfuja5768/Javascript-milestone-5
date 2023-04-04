function updatedPhnNumber(isIncrement){
    const numberField = document.getElementById('phn-number-field');
    const numberFieldString = numberField.value;
    const previousPhnNumber = parseInt(numberFieldString);
    let newPhnNumber;
    if(isIncrement === true){
        newPhnNumber = previousPhnNumber + 1;
     }
    else{
        newPhnNumber = previousPhnNumber - 1;
     };
     numberField.value = newPhnNumber;
     return newPhnNumber;
}
function updatedPhnTotalPrice(newPhnNumber){
    const PhnTotalPrice = newPhnNumber * 1219;
    const PhnTotalElement = document.getElementById('phn-price');
    PhnTotalElement.innerText = PhnTotalPrice
}
 
document.getElementById('phn-btn-plus').addEventListener('click', function(){
    const newPhnNumber = updatedPhnNumber(true);
    updatedPhnTotalPrice(newPhnNumber);
    calculateSumTotal()
});
document.getElementById('phn-btn-minus').addEventListener('click', function(){
    const newPhnNumber = updatedPhnNumber(false);
    updatedPhnTotalPrice(newPhnNumber);
    calculateSumTotal()
})