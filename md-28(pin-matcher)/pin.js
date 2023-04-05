function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const randomPin = Math.round(Math.random()*10000);
    return randomPin;
}
document.getElementById('generate-pin-btn').addEventListener('click', function(){
    const pin = getPin();
    const generateField = document.getElementById('generate-field');
    generateField.value = pin;
});


document.getElementById('calculator').addEventListener('click', function(event){
    const getNumber = event.target.innerText;
    const inputDisplay = document.getElementById('input-display');
    const previousInputNumber= inputDisplay.value;
    if(isNaN(getNumber)){
       if(getNumber === 'C'){
        inputDisplay.value = '';
       }
       else if(getNumber === '<'){
        const digits = previousInputNumber.split('');
        digits.pop();
        const remainingDegits = digits.join('')
        inputDisplay.value = remainingDegits;
       }
    }
    else{
        const newInputNumber = previousInputNumber + getNumber;
        inputDisplay.value = newInputNumber
    }
});


document.getElementById('submit').addEventListener('click', function(){
    const generateField = document.getElementById('generate-field');
    const currentPin = generateField.value;

    const inputDisplay = document.getElementById('input-display');
    const typedPin = inputDisplay.value;

    if(currentPin === typedPin){
       const pinSuccess = document.getElementById('pin-success');
       pinSuccess.style.display = 'block';
       const pinIncorrect = document.getElementById('pin-incorrect')
       pinIncorrect.style.display = 'none';
    }
    else{
        const pinIncorrect = document.getElementById('pin-incorrect')
        pinIncorrect.style.display = 'block';
        const pinSuccess = document.getElementById('pin-success');
        pinSuccess.style.display = 'none';
    }
})