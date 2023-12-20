const form = document.getElementById("form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const dateBirth = document.getElementById("dateBirth")
const message = document.getElementById("message")
const username = document.getElementById("username")
const passaword = document.getElementById("passaword")
const modal = document.getElementById("modal")
let ageNumber = 0;
let items = []

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();
    })

    function checkInputs() {
        var nameValue = name.nameValue;
        var emailValue = email.emailValue;
        var phoneValue = phone.phoneValue;
        var dateValue = dateBirth.dateValue;
        var messageValue = message.messageValue;
        var usernameValue = username.usernameValue;
        var passawordValue = passa.passawordValue;

    }

        if(nameValue === ""){
            setErrorFor(name,"O nome completo é obrigatório");
        }else{
            setSuccess(name);


        }
        function setErrorFor (input,message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");

        small.innerText = message;

        formControl.className = "form-control error"
        }

        function setSuccessFor(input) {
            const formControl = input.parentElement;
         
            formControl.className = "form-control success"
        }
