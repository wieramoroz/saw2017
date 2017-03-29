

function validate_reg(form) {
	var error = false;
	document.getElementById("user_err").innerText="";
	document.getElementById("mail_err").innerText="";
	document.getElementById("pass_err").innerText=""

    if (form.username.value == "" || /[^a-zA-z]/.test(form.username.value)) {
    	error= true;
        document.getElementById("user_err").innerText="Deve contenere solo lettere";
    }
    if(form.mail.value=="" || /[^[a-z0-9_]+@[a-z0-9\-]+\.[a-z0-9\-\.]+$]]/.test(form.mail.value)) {
    	error = true;
    	document.getElementById("mail_err").innerText = "La mail non e' valida";
    }
    if (form.password.value == "" || /[^0-9]/.test(form.password.value)) {
    	error = true;
        document.getElementById("pass_err").innerText = "Deve contenere solo numeri";
    }
    return !error;
}

function validate_log(form) {
	var reason = "";

    if (form.username.value == "" || /[^a-zA-z]/.test(form.username.value))
        reason += "Errore: il nome deve contenere solo le lettere\n";
    if (form.password.value == "" || /[^0-9]/.test(form.password.value))
        reason += "Errore: la password deve contenere solo i numeri\n";
    

    if (reason == "")
        return true;  
    else {
        alert(reason);  
        return false;
    }
}

/*
========= 29/3/17 - Fabrizio
modificato le funzioni perche in caso di errore non stampino su un aletr
ma su un label accanto al campo errato
========= 

*/