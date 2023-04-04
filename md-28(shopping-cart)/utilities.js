function getTextElementValueById(elementId){
    const totalElement = document.getElementById(elementId);
    const currentTotalString = totalElement.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
};

function setTextElementById(elementId, value){
    const subtotalPrice = document.getElementById(elementId);
    subtotalPrice.innerText = value;
}

function calculateSumTotal(){
    const currentPhnTotal = getTextElementValueById('phn-price')
    const currentCaseTotal = getTextElementValueById('case-price')
    const currentSubTotal = currentPhnTotal + currentCaseTotal;
    setTextElementById('subtotal', currentSubTotal);
    const taxTotalString = (currentSubTotal * 0.1).toFixed(2);
    const taxTotal = parseFloat(taxTotalString);
    setTextElementById('tax', taxTotal);
    const finalTotal = currentSubTotal + taxTotal;
    setTextElementById('final-total', finalTotal)
}
 