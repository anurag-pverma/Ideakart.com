import navbar from "../Components/navbar.js";
let navdata = document.getElementById("navbar-data");
navdata.innerHTML = navbar();

let urls = `https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey`;
let key = `AIzaSyApbPYxo0lGhfFYuEEK13NzncTcTF5L2gU`;

let bookStore = async () => {
  try {
    let response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=time&printType=books&orderBy=newest&projection=full&key=AIzaSyApbPYxo0lGhfFYuEEK13NzncTcTF5L2gU&maxResults=40`
    );
    let data = await response.json();
    // return data;
    appendBook(data.items);
  } catch (error) {
    console.log("error", error);
  }
};

bookStore();

let main = document.getElementById("main");

let appendBook = (data) => {
  data.forEach((el) => {
    let box = document.createElement("div"); 
    let hr = document.createElement("hr");
    box.setAttribute("id", "box");
    let img = document.createElement("img");
    img.src = el.volumeInfo.imageLinks.thumbnail;
    let title = document.createElement("p");
    title.textContent = el.volumeInfo.title;
    let price = document.createElement("p");
    price.textContent = `${el.volumeInfo.pageCount}.0`;
    price.style.color = "#219FD1";
    price.setAttribute("id", "price");

    title.setAttribute("id", "title");
    let add = document.createElement("div");
    let anchor1 = document.createElement("a");
    anchor1.innerText = "More-Details";
    let anchor2 = document.createElement("a");
    anchor2.innerText = "view-now";
    let cart = document.createElement("i");
    let soap = document.createElement("i");
    soap.setAttribute("class", "fas fa-sliders-h");

    add.addEventListener("click", function () {
      sendInLocal_storage(el);
      window.location.href = "details.html";

    });

    cart.append(anchor2);
    soap.append(anchor1);

    cart.setAttribute("class", "fas fa-shopping-cart");
    add.append(cart, soap);
    box.append(img, title, price, hr, add);
    main.append(box);
  });

  function sendInLocal_storage(el) {
    let data = [];
    data.push(el);
    localStorage.setItem("books", JSON.stringify(data));
  }
};



let book = document.getElementById("search-btn");
book.addEventListener("click", checkBook);

async function checkBook(event) {
  event.preventDefault();
  try {
    let search = document.getElementById("query").value;
    
    let res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      var mydata = await res.json();
      console.log(mydata);
      
    } catch (error) {
      console.log("error", error);
      
      
    }
    let getdata = [];
    getdata.push(mydata);
    localStorage.setItem("searchResult", JSON.stringify(getdata));
    window.location.href = "search.html"
    
}

