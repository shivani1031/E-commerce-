const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    
    <div class="footer-content">
    <img src ="images/light-logo.png" class="logo" alt =" ">
    
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">
                Men
            </li>
            <li><a href="#" class="footer-link">  T-Shirts  </a></li>
            <li><a href="#" class="footer-link">  Sweatshirts  </a></li>
            <li><a href="#" class="footer-link">  Shirts  </a></li>
            <li><a href="#" class="footer-link">  Jeans  </a></li>
            <li><a href="#" class="footer-link">  Trousers  </a></li>
            <li><a href="#" class="footer-link">  Shoes  </a></li>
            <li><a href="#" class="footer-link">  Casuals  </a></li>
            <li><a href="#" class="footer-link">  Formal  </a></li>
            <li><a href="#" class="footer-link">  Sports  </a></li>
            <li><a href="#" class="footer-link">  Watch  </a></li>


        </ul>
        <ul class="category">
            <li class="category-title">
                Women
            </li>
            <li><a href="#" class="footer-link">  T-Shirts  </a></li>
            <li><a href="#" class="footer-link">  Sweatshirts  </a></li>
            <li><a href="#" class="footer-link">  Shirts  </a></li>
            <li><a href="#" class="footer-link">  Jeans  </a></li>
            <li><a href="#" class="footer-link">  Trousers  </a></li>
            <li><a href="#" class="footer-link">  Shoes  </a></li>
            <li><a href="#" class="footer-link">  Casuals  </a></li>
            <li><a href="#" class="footer-link">  Formal  </a></li>
            <li><a href="#" class="footer-link">  Sports  </a></li>
            <li><a href="#" class="footer-link">  Watch  </a></li>


        </ul>
    </div>
     </div> 
   <p class="footer-title">About Company</p>
  <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem pariatur ex adipisci non, a id
          explicabo aliquam reiciendis, molestiae ab autem cumque iste, hic voluptates maiores molestias et iure. Ad
          excepturi quam reprehenderit eum animi, natus qui ex tempora possimus rerum totam omnis, quas doloribus 
          ducimus quae suscipit tenetur. Necessitatibus, sapiente? Ratione veritatis a animi doloremque placeat dolorum
          cumque eligendi quasi culpa sequi? Doloribus provident nisi alias voluptatibus expedita temporibus cumque
          architecto saepe ut soluta veniam, fugit beatae esse corporis error quod natus velit iste, necessitatibus 
          nesciunt consequuntur assumenda earum dolor? Sunt esse debitis doloribus recusandae natus accusamus facilis.
 
 </p>
 <p class="info">support emails - help@clothing.com,
     customersupport@clothing.com</p>
 <p class="info">telephone -180 00 00 001,180 00 00 002</p>
 <div class="footer-social-container">
     <div>
         <a href="#" class="social-link">Terms & Services</a>
         <a href="#" class="social-link">Privacy page</a> 
         </div>       
         <div>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a> 
            <a href="#" class="social-link">Twitter</a> 
        </div>    
 </div>
<p class="footer-credit">Clothing, Best apparels online store</p> 
    `;
}

createFooter();