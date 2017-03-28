

function validate_reg(form) {
	var reason = "";

    if (form.username.value == "" || /[^a-zA-z]/.test(form.username.value))
        reason += "Errore: il nome deve contenere solo le lettere\n";
    if(form.mail.value=="" || /[^[a-z0-9_]+@[a-z0-9\-]+\.[a-z0-9\-\.]+$]]/.test(form.mail.value))
    	reason += "Errore: la mail non e' valida\n";
    if (form.password.value == "" || /[^0-9]/.test(form.password.value))
        reason += "Errore: la password deve contenere solo i numeri\n";
    

    if (reason == "")
        return true;  
    else {
        alert(reason);  
        return false;
    }
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