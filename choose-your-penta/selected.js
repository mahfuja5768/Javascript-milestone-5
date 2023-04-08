
function disableButton(id){
    const selectBtn = document.getElementById(id);
    selectBtn.setAttribute('disabled' , true)
}

document.getElementById('select-btn-1').addEventListener('click', function(){
    addPlayerName('player-1');
    disableButton('select-btn-1')
});
document.getElementById('select-btn-2').addEventListener('click', function(){
    addPlayerName('player-2');
    disableButton('select-btn-2')
});
document.getElementById('select-btn-3').addEventListener('click', function(){
    addPlayerName('player-3');
    disableButton('select-btn-3')
});
document.getElementById('select-btn-4').addEventListener('click', function(){
    addPlayerName('player-4');
    disableButton('select-btn-4')
});
document.getElementById('select-btn-5').addEventListener('click', function(){
    addPlayerName('player-5');
    disableButton('select-btn-5')
});
document.getElementById('select-btn-6').addEventListener('click', function(){
    addPlayerName('player-6');
    disableButton('select-btn-6')
});
