function login() {
    let email = document.getElementById("email").value.toLowerCase();

    document.getElementById("login").style.display = "none";

    if (email.includes("business")) {
        document.getElementById("business").style.display = "block";
    } 
    else if (email.includes("rider")) {
        document.getElementById("rider").style.display = "block";
    }
    else {
        document.getElementById("personal").style.display = "block";
    }
}
