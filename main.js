const password_el = document.querySelector('#password');
const length_el = document.querySelector('#length');
const uppercase_el = document.querySelector('#uppercase');
const lowercase_el = document.querySelector('#lowercase');
const numbers_el = document.querySelector('#numbers');
const symbols_el = document.querySelector('#symbols');

const generate_btn = document.querySelector('#generate');
generate_btn.addEventListener('click', GeneratePassword);
const copy_btn = document.querySelector('#copy');
copy_btn.addEventListener('click', CopyPassword);

const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbols_chars = "!@#$%^&*()";
let something = false;

function GeneratePassword() {
    let password = "";
    let length = length_el.value;
    let chars = "";

    if(uppercase_el.checked || lowercase_el.checked || numbers_el.checked ||  symbols_el.checked ){
        chars += uppercase_el.checked ? uppercase_chars : "";
        chars += lowercase_el.checked ? lowercase_chars : "";
        chars += numbers_el.checked ? numbers_chars : "";
        chars += symbols_el.checked ? symbols_chars : "";
    
        for (let i = 0; i <= length; i++) {
            let rand = Math.floor(Math.random() * chars.length);
            password += chars.substring(rand, rand + 1);
        }
        password_el.value = password;
        something=true;

    }else{
        alert("Please select any given checkbox(s).");
        something=false;
    }
}

async function CopyPassword() {
    if (navigator.clipboard && something) {
        await navigator.clipboard.writeText(password_el.value);

        alert("Password is copied to clipboard");
    }
    else {
        alert("Nothing is there on the clipboard")
    }
}
