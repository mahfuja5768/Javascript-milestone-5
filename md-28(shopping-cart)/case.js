function updatedCaseNumber(isIncrement){
    const numberField = document.getElementById('number-field');
    const numberFieldString = numberField.value;
    const previousCaseNumber = parseInt(numberFieldString);
    let newCaseNumber;
    if(isIncrement === true){
        newCaseNumber = previousCaseNumber + 1;
     }
    else{
        newCaseNumber = previousCaseNumber - 1;
     };
     numberField.value = newCaseNumber;
     return newCaseNumber;
}
function updatedCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-price');
    caseTotalElement.innerText = caseTotalPrice
}

document.getElementById('btn-plus').addEventListener('click', function(){
    const newCaseNumber = updatedCaseNumber(true);
    updatedCaseTotalPrice(newCaseNumber);
    calculateSumTotal()
});
document.getElementById('btn-minus').addEventListener('click', function(){
    const newCaseNumber = updatedCaseNumber(false);
    updatedCaseTotalPrice(newCaseNumber);
    calculateSumTotal()
})