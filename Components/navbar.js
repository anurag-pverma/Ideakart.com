let navbar = () => {
    return `
    
    <div id="main-div">

    <div id="left">
        <div id="logo"><a href="index.html" >IDEAKART</a></div>
        <form action="" id="search-bar">
            <input type="text" placeholder="Search"  id="query" value="" autocomplete="off">
            <button  id="search-btn">Search</button>
        </form>

    </div>
    <div id="others">
        <ul id="ul-list">
            <li- id="list"><a href="about.html" id="anchor1" class="a-tag-nav">About</a></li->
            <li- id="list"><a href="contact.html" id="anchor2" class="a-tag-nav">Contact</a></li->
            <li- id="list"><a href="signin.html" id="anchor3" class="a-tag-nav">Sign In</a></li->
            <li- id="list"><a href="signup.html" id="anchor4" class="a-tag-nav">Sign Up</a></li->
        </ul>
    </div>
</div>`;
}

export default navbar;
