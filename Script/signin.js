import navbar from "../Components/navbar.js";
let navdata = document.getElementById("navbar-data");
navdata.innerHTML = navbar();


let mydata = JSON.parse(localStorage.getItem('allDetails'))
console.log(mydata);


window.addEventListener("load", function () {
    let registerForm = this.document.getElementById("registerForm")
    registerForm.addEventListener("submit", (event) =>{
        event.preventDefault();
        
        let getData = new FormData(registerForm);

        let myemail = getData.get("email");
        let mypassword = getData.get("password");

        // console.log('email', email)
        // console.log('password', password);
        for (var i = 0; i < mydata.length; i++){
            if (mydata[i].email == myemail && mydata[i].password == mypassword) { 
                alert(" Thank You For Sign In !")
                window.location.href = "index.html";
            }
            else {
                alert("Your email password is wrong signup again !")
                window.location.href = "signUp.html";
            }
         }



        
    })
})