document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    
    if(email === 'muna@gmail.com' && password === 'myra'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please enter the correct information!')
    }
})