const fname = document.querySelector('#first-name');
const lname= document.querySelector('#last-name');
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const form = document.querySelector('#signin');

form.addEventListener('submit', function(e){
    e.preventDefault();

    // validate forms
    let isFirstNameValid = checkFirstname(),
    isLastNameValid = checkLastname(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();

    let isFormValid = isFirstNameValid &&
    isLastNameValid &&
        isEmailValid &&
        isPasswordValid;

        // submit to the server if the form is valid
    if (isFormValid) {

    }
});

//The following isRequired() function returns true if the input argument is empty:
const isRequired = value => value === '' ? false:true;
//The following isBetween() function returns false if the length argument is not between the min and max argument:
const isBetween=(length, min, max) => length < min || length > max ? false : true;
//To check the email is valid, you’ll use a regular expression:
const isEmailValid = (email) =>{
    const re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
//To check if a password is strong, which match a specified pattern, you’ll also use a regular expression:
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
//The following showError() function highlights the border of the input field and displays an error message if the input field is invalid:
const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('div');
    error.textContent = message;
    //show error Icon
    const errorIcon = formField.querySelector('img');
    errorIcon.style.visibility= 'visible';
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('div');
    error.textContent = '';
    //Hide error Icon
    const errorIcon = formField.querySelector('img');
    errorIcon.style.visibility= 'hidden';
}
// check first name

const checkFirstname = () => {

    let valid = false;
    const firstName = fname.value.trim();

    if (!isRequired(firstName)) {
        showError(fname, 'First name cannot be blank.');
    // } else if (!isBetween(firstName.length, min, max)) {
    //     showError(fname, `First name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(fname);
        valid = true;
    }
    return valid;
}
// check Last name

const checkLastname = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const lastName = lname.value.trim();

    if (!isRequired(lastName)) {
        showError(lname, 'Last name cannot be blank.');
    // } else if (!isBetween(lastName.length, min, max)) {
    //     showError(lname, `Last name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(lname);
        valid = true;
    }
    return valid;
}
// check Email
const checkEmail = () => {
    let valid = false;
    const emailEl = email.value.trim();
    if (!isRequired(emailEl)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(emailEl)) {
        showError(email, 'Looks like this is not and email')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
}

//check password
const checkPassword = () => {

    let valid = false;

    const pword = password.value.trim();

    if (!isRequired(pword)) {
        showError(password, 'Password cannot be blank.');
    // } else if (!isPasswordSecure(pword)) {
    //     showError(password, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(password);
        valid = true;
    }

    return valid;
};