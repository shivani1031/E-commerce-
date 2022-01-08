const createNav = () =>{
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
<img src="images/dark-logo.png" class="brand-logo" alt="">
<div class="nav-items">
    <div class="search">
        <input type="text" class="search-box" placeholder="search brand,product">
        <button class="search-btn">
          <a href = search.html> <span style="color:white"> Search </span> </a>
        </button>
    </div>
    <a href= "form.html"><img src = "images/user.png" alt=" "></a>
    <a href= "#"><img src = "images/cart.png" alt=" "></a>

</div>
</div>
<ul class="links-container">
    <li class="link-item"><a href = "ecom.html" class="link">Home</a></li>
    <li class="link-item"><a href = "product.html" class="link"> Women </a></li>
    <li class="link-item"><a href = "product.html" class="link"> Men </a></li>
    <li class="link-item"><a href = "product.html" class="link"> Kids </a></li>
    <li class="link-item"><a href = "product.html" class="link"> Accessories </a></li>

</ul>
    `;
}

createNav();
