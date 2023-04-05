function getInputElementById(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputNumber = parseFloat(inputFieldString);
    return inputNumber;
}

function setTextElementById(elementId, value){
    const displayField = document.getElementById(elementId);
    displayField.innerText = value;
}