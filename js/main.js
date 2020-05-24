var x = document.getElementById("login");
var y = document.getElementById("sign-up");
var z = document.getElementById("btn-colour");

        function signup(){
            x.style.left = "-400px";
            y.style.left = "50px";
            z.style.left = "110px";
        }

        function login(){
            x.style.left = "50px";
            y.style.left = "490px";
            z.style.left = "0";
        }

var objPeople = [
    {
        email: "ben.m.allsopp@outlook.com",
        password: "monkey"
    }
]

function getInfo() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    
    for (i = 0; i < objPeople[i].length; i++) {
        if(email == objPeople[i].email && password == objPeople[i].password) {
            console.log(email + " is logged in.")
            return
        }
    }
    console.log("incorrect email or password")
}