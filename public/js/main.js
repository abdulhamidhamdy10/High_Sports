function validate(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpass = document.getElementById("confirmpass").value;
    var message = document.getElementById("error");

    message.style.color = "#fff";
    message.style.textAlign ="center";
    message.style.backgroundColor ="red";
    message.style.padding ="10px";
    message.style.transition ="all 1s ease";
    message.style.marginBottom ="10px";

    if(name=="" && email=="" && password=="" && confirmpass==""){
        message.innerHTML = "please enter data" ;
        return false ;
    }else if(name.length<5 || name.length>15){
        message.innerHTML = "please insert 5-15 charcter" ;
        return false ;
    }else if(email.indexOf("@") == "-1"){
        message.innerHTML = "please insert validate e-mail" ;
        return false ;
    }else if(password < 8){
        message.innerHTML = "please insert atleast 8 charcter " ;
        return false ;
    }else if(password != confirmpass){
        message.innerHTML = "please matched password " ;
        return false ;
    }else {
        return true ;
    }
}