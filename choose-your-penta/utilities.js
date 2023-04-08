////choose five player:::

function playerName(id){
    const name = document.getElementById(id);
    const nameText = name.innerText;
    return nameText;
};

function addPlayerName(id){
    const playerAdd = playerName(id);
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = playerAdd;
    if(listContainer.childNodes.length === 5){
       alert(`Sorry! You can't choose more than five players`);
    }
     else{
        listContainer.appendChild(li);
     }
}
 

  
    /////budget calculation::
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
    document.getElementById('calculate-btn').addEventListener('click', function(){
        const playerExpense = getInputElementById('player-expense-input');
        const playerExpenses = getInputElementById('player-expenses');
        const managerPrice = getInputElementById('manager-price-input');
        const couchPrice = getInputElementById('couch-price-input');
        const finalTotal = getInputElementById('final-total');
    
        const finalPlayerExpenses = playerExpense * 5;
        setTextElementById('player-expenses', finalPlayerExpenses);
    
        document.getElementById('calculate-total-btn').addEventListener('click', function(){
            const currentFinalTotal = finalPlayerExpenses + managerPrice + couchPrice;
            setTextElementById('final-total', currentFinalTotal);
        })
    })

