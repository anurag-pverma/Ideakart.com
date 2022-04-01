    
import navbar from "../Components/navbar.js";
let navdata = document.getElementById("navbar-data");
navdata.innerHTML = navbar();

    window.addEventListener("load", function(){
        //Registering
        let registerForm = document.getElementById("registerForm")
        
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault()
            
            const formData = new FormData(registerForm);
            let name = formData.get("name")
            let email = formData.get("email")
            let password = formData.get("password")
            let repassword = formData.get("repassword")
            let mobile = formData.get("mobile")
            
            
            var  object = {
                name: name,
                email:  email,
                password: password,
                repassword: repassword,
                number: mobile, 
            }
            
            let  formDetails= JSON.parse(localStorage.getItem("allDetails"))||[];
            formDetails.push(object);
            localStorage.setItem("allDetails", JSON.stringify(formDetails)); 
            
            console.log(object);
            window.location.href = "signin.html";
            alert("Thank Your for SignUp !")
        })





})




