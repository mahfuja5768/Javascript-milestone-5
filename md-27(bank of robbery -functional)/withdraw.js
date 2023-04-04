document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('input-withdraw-amount');
    const previousWithdrawAmount = getElementValueById('withdraw-field');
    const previousBalanceTotal = getElementValueById('balance-field');
    if(previousBalanceTotal > newWithdrawAmount){
        const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
        setTextElementValueById('withdraw-field', totalWithdrawAmount);
        const totalBalanceAmount = previousBalanceTotal - newWithdrawAmount;
        setTextElementValueById('balance-field', totalBalanceAmount);
    }
    else{
        alert(`Sorry! you don't have enough money`);
        return;
    }
})