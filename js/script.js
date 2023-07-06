const fnameInput = document.getElementById("name");
const femailAddressInput = document.getElementById("email");
const fphoneNumberInput = document.getElementById("phone");
const fmessageInput = document.getElementById("message");
const submitButtonInput = document.getElementById("submitButton");

submitButton.addEventListener ("click", function(event){
    event.preventDefault()
    const fnameValue = fnameInput.value
    const femailAddressValue = femailAddressInput.value
    const fphoneNumbervalue = fphoneNumberInput.value
    const fmessageValue = fmessageInput.value  
    formValidation(fnameValue, femailAddressValue, fphoneNumbervalue, fmessageValue) 
    
})

function formValidation(fname, femail, fphone, fmessage){
    if (fname == "") {
        alert ("Name is required!")
        return false
    }

    if (femail == "") {
        alert ("Email is required!")
        return false
    }

    if (fphone == "") {
        alert ("Phone number is required!")
        return false
    }

    if (fmessage == "") {
        alert ("Messages is required!")
        return false
    }

    if (fname == "" || femail == "" || fphone == "" || fmessage == "") {
        alert ("No blank form allowed!");
        return false;
    } else { 
        alert ("Success! Your data has been send.");
    }
    
    setSenderUI(fname, femail, fphone, fmessage);

    return false;
}