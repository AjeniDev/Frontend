const email = document.querySelector('#email');
const form = document.querySelector('#register');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let isEmailValid = checkEmail();
    let isFormValid= isEmailValid();

    if (isFormValid){

    }
});

const isRequired = value => value === ''? false:true;

const isEmailValid = (email) =>{
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const showError = (input, message) =>{
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('div');
    error.textContent = message;
};
const showSuccess = (input)=>{
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('div');
    error.textContent = " ";
}

const checkEmail = () => {
    let valid = false;
    const emailEl = email.value.trim();
    if (!isRequired(emailEl)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(emailEl)) {
        showError(email, 'Looks like this is not an email');
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};