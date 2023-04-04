document.getElementById('btn-deposit').addEventListener('click', function(){
    const NewDepositAmount = getInputFieldValueById('input-deposit-amount');
    const previousDepositAmount = getElementValueById('deposit-field');
    const totalDepositAmount = previousDepositAmount + NewDepositAmount;
    setTextElementValueById('deposit-field' , totalDepositAmount);
    const previousBalanceTotal = getElementValueById('balance-field');
    const totalBalanceAmount = previousBalanceTotal + NewDepositAmount;
    setTextElementValueById('balance-field', totalBalanceAmount)
})