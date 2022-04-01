let main = document.getElementById("main");
let searchResult = JSON.parse(localStorage.getItem("searchResult"));
console.log(searchResult);

appendBook(searchResult[0].items);


function appendBook(searchResult) {
  searchResult.forEach((el) => {
    let box = document.createElement("div");
        let hr = document.createElement("hr");
        box.setAttribute("id", "box");
        let img = document.createElement("img");
        img.src = el.volumeInfo.imageLinks.thumbnail;
        let title = document.createElement("p");
        title.textContent = `Title :-  ${el.volumeInfo.title}`
        title.style.color = "blue"
        let left = document.createElement("div");
        left.setAttribute("id", "side");
        let ph4 = document.createElement("p");
        ph4.textContent= el.volumeInfo.description
        let amount = document.createElement("p");
        amount.innerText = "BuyNow Only Rs.  599/-"
        // amount.textContent = `Buy Now Only:- ${el.saleInfo.listPrice.amount} Rs`
        let currencyCode= document.createElement("p");
        currencyCode.innerText = "Currency :- INR"
        // currencyCode.textContent = ` Currency:-  ${el.saleInfo.listPrice.currencyCode}`
        let retailPrice = document.createElement("p");
        retailPrice.innerHTML= "Retail Price Rs. 999/-"
        // retailPrice.textContent = `Retail Price:-  ${el.saleInfo.retailPrice.amount}`;
        let sells = document.createElement("div");
        sells.setAttribute("id", "sells");
        let buy = document.createElement("button");
        let link = document.createElement("a");
        
        let h2 = document.createElement("h2");
        h2.textContent = el.searchInfo.textSnippet
        let subtitles = document.createElement("p");
        subtitles.textContent= ` Subtitles:-     ${el.volumeInfo.subtitle}`
        subtitles.style.color = "red"
        subtitles.style.fontSize = "20px";
        link.innerText = "BUY NOW";
        link.href = el.saleInfo.buyLink
        

        let printType = document.createElement("p")
        printType.textContent = `  Type :- ${el.volumeInfo.printType}`
        let publisher = document.createElement("p")
        publisher.textContent = `Publisher: -  ${el.volumeInfo.publisher}`
        let publishedDate= document.createElement("p")
        publishedDate.textContent = ` Publish Date: -  ${el.volumeInfo.publishedDate}`
        let authors= document.createElement("p")
        authors.textContent = `Author : ${el.volumeInfo.authors[0]}`
        let averageRating= document.createElement("p")
        averageRating.textContent =` Average Rating : ${ el.volumeInfo.averageRating}*****`
        let  lastwla = document.createElement("div");
        let dowonload = document.createElement("a")
        dowonload.innerText = "Download Now"
        dowonload.style.padding = "10px"
        // dowonload.style.width = "150px"
        dowonload.style.border = "1px solid black"

        dowonload.style.borderRadius = "5px"
        dowonload.style.backgroundColor = "green"

        dowonload.href = `Download Book -${el.volumeInfo.canonicalVolumeLink}`;
        lastwla.setAttribute("id", "lastwla")
        lastwla.append(printType, publisher, publishedDate, authors, averageRating, dowonload);


        let knowmore = document.createElement("button");
        let anchor3 = document.createElement("a");
        anchor3.href = `  ${el.volumeInfo.previewLink}`;
        anchor3.innerText = "READ More"
        knowmore.append(anchor3)

        left.append(title, h2, ph4);
        buy.append(link);
        box.append(img,left);
        sells.append(amount,retailPrice, currencyCode, buy);
        main.append(box, sells, subtitles, lastwla, knowmore);

  });
};

