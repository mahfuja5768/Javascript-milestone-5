///deposit part::
document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputDepositAmount = document.getElementById('input-deposit-amount');
    const depositAmountString = inputDepositAmount.value;
    const newDepositAmount = parseFloat(depositAmountString);
    const depositField = document.getElementById('deposit-field');
    const previousDepositString = depositField.innerText;
    const previousDepositAmount = parseFloat(previousDepositString);
    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    depositField.innerText = totalDepositAmount;
    inputDepositAmount.value = ''

    //balance part:
    const balanceField = document.getElementById('balance-field');
    const balanceFieldString = balanceField.innerText;
    const previousBalanceAmount = parseFloat(balanceFieldString);
    const currentTotalBalance = previousBalanceAmount + newDepositAmount;
    balanceField.innerText = currentTotalBalance;

});

///withdraw part::
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputWithdrawAmount = document.getElementById('input-withdraw-amount');
    const withdrawAmountString = inputWithdrawAmount.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);
    const withdrawField = document.getElementById('withdraw-field');
    const previousWithdrawString = withdrawField.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString );
    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawField.innerText = totalWithdrawAmount;
    inputWithdrawAmount.value = ''

    //balance part:
    const balanceField = document.getElementById('balance-field');
    const balanceFieldString = balanceField.innerText;
    const previousBalanceAmount = parseFloat(balanceFieldString);
    const newTotalBalance = previousBalanceAmount - totalWithdrawAmount;
    balanceField.innerText = newTotalBalance;

});