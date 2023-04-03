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

