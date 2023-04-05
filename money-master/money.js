document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodExpenses = getInputElementById('food-expenses');
    const rentExpenses = getInputElementById('rent-expenses');
    const clothesExpenses = getInputElementById('clothes-expenses');
    const incomeAmount = getInputElementById('income-amount');
    const totalExpense = getInputElementById('total-expenses');
    const balanceAmount = getInputElementById('balance-amount');

    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    setTextElementById('total-expenses', totalExpenses);

    const balance = incomeAmount - totalExpenses;
    setTextElementById('balance-amount', balance);

    document.getElementById('save-btn').addEventListener('click', function(){
        const savingAmount = getInputElementById('saving-amount');
        const remainingBalance = getInputElementById('remaining-balance');
    
        const finalSavingAmount = incomeAmount * 0.2 ;
        setTextElementById('saving-amount', finalSavingAmount);

        const finalRremainingBalance = balance - finalSavingAmount;
        setTextElementById('remaining-balance', finalRremainingBalance);
    
    })
});

