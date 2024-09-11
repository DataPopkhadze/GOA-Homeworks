const myEmail = document.getElementById('myEmail');
const myPassword = document.getElementById('myPass');
const myBtn = document.getElementById('myButton');
const form = document.getElementById('myForm');

function clickSubmit() {

    const emailValue = form.elements['myEmail'].value; 
    const passwordValue = form.elements['password'].value;

    if (emailValue === "" || passwordValue === "") {
        alert('please fill in all of your information');
        return;
    }

    console.log("email: " + emailValue);
    console.log("password: " + passwordValue);
    console.log('form submitted successfully');
}

myBtn.onclick = clickSubmit;
