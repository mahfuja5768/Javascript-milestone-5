document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    console.log(email, password);
    if(email === 'muna@gmail.com')
})