const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const idNumber = document.getElementById('idNumber');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const email = document.getElementById('email');


name.addEventListener('input', () => localStorage.setItem('name', name.value));
surname.addEventListener('input', () => localStorage.setItem('surname', surname.value));
age.addEventListener('input', () => localStorage.setItem('age', age.value));
idNumber.addEventListener('input', () => localStorage.setItem('idNumber', idNumber.value));
height.addEventListener('input', () => localStorage.setItem('height', height.value));
weight.addEventListener('input', () => localStorage.setItem('weight', weight.value));
email.addEventListener('input', () => localStorage.setItem('email', email.value));

window.addEventListener('load', () => {
    name.value = localStorage.getItem('name');
    surname.value = localStorage.getItem('surname');
    age.value = localStorage.getItem('age');
    idNumber.value = localStorage.getItem('idNumber');
    height.value = localStorage.getItem('height');
    weight.value = localStorage.getItem('weight');
    email.value = localStorage.getItem('email');
});