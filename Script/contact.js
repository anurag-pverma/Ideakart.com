
import navbar from "../Components/navbar.js";
let navdata = document.getElementById("navbar-data");
navdata.innerHTML = navbar();

document.querySelector("#form-control").addEventListener("submit", sendMessage);

function sendMessage(event) {
    event.preventDefault();
    let f_name= document.querySelector("#first-name").value;
    let l_name = document.querySelector("#last-name").value;
    let em= document.querySelector("#email").value;
    let num= document.querySelector("#number").value;
    let t_area = document.querySelector("#text-area").value;

    let messageData = {
        first_name :f_name,
        last_name: l_name,
        email: em,
        number:num,
        text_area: t_area,
        
    }
    let data = JSON.parse(localStorage.getItem("contactDetails")) || [];
    data.push(messageData);
    localStorage.setItem("contactDetails", JSON.stringify(data));
    alert(` Ideacart.com says ! ${"\n"} Thank You! Your form has been submitted.`)
    console.log(messageData);
    
}
