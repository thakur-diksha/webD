function validateForm(){
    var pass1=document.getElementById("pass");
    var pass2=document.getElementById("cpass");
    var phone=document.getElementById("contact");
    var mail=document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phno=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var valid=true;
    if(pass1.value==pass2.value){
        valid=true;
    }
    else{
        alert("Passwords do not match");
        valid=false;
    }


    if(mail.value.match(mailformat)){
    valid = true;
    }
    else{
        alert("Please enter the valid email format!");
    valid = false;
}

if((phone.value.match(phno))){
    valid = true;
}
else{
    alert("Please enter a valid 10 digit number");
    valid = false;
}
return valid;
}