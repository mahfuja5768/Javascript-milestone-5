
///if u input email then the submit button will enable::
document.getElementById('input-text').addEventListener('keyup', function(event){
    const text = event.target.value;
    const submitBtn = document.getElementById('submit-btn');
    if(text === 'email'){
        submitBtn.removeAttribute('disabled')
    }
    else{
        submitBtn.setAttribute('disabled', true);
    }
})
///if u dubble click id-name: chng-bg , bg will change
document.getElementById('chng-bg').addEventListener('dblclick',function(){
    const chngBg = document.getElementById('subscribe') ;
    chngBg.style.backgroundColor = 'pink'
})