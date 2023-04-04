// /withdraw part::
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputWithdrawAmount = document.getElementById('input-withdraw-amount');
    const withdrawAmountString = inputWithdrawAmount.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);
    const withdrawField = document.getElementById('withdraw-field');
    const previousWithdrawString = withdrawField.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString );
    inputWithdrawAmount.value = ''

    //balance part:
    const balanceField = document.getElementById('balance-field');
    const balanceFieldString = balanceField.innerText;
    const previousBalanceAmount = parseFloat(balanceFieldString);
    if(newWithdrawAmount > previousBalanceAmount){
        alert(`Sorry! your account has not that much money.`)
    }
    else{
    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawField.innerText = totalWithdrawAmount;
    const newTotalBalance = previousBalanceAmount - newWithdrawAmount;
    balanceField.innerText = newTotalBalance;
    }

});