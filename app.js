console.log('filters project');
console.log(products);
let filteredProducts = [...products];
console.log(filteredProducts);


const  generateCart =(filteredProducts)=> {
    const myProducts = filteredProducts.map((product)=>{
        return `<article class="product" data-id="${product.id}">
          <img class ="product-img img" src="${product.image}" alt="${product.title}">
          <footer>
            <h5 class="product-name">${product.title}</h5>
            <span class="product-price">₹ ${product.price}</span>
          </footer>
        </article>`
    }).join(' ');
    console.log("myProducts : " , myProducts);
    displayProducts(myProducts);
    return;
}
function displayProducts(myProducts){
    console.log("myProducts : ",myProducts);
    
    const productsContainer = document.querySelector(".products-container");
    if(myProducts.length <1){
      productsContainer.innerHTML= "Sorry , Abhishek does not have ans for this quiery ."
    }
    else productsContainer.innerHTML= myProducts;
}

// Search Filter
const form = document.querySelector('.input-form');
const searchInput = document.querySelector(".search-input");
console.log(form);
console.log(searchInput);
console.log("searchInput.value00 : ",searchInput.value);
form.addEventListener('keyup',()=>{
      const  inputValue= searchInput.value;
      console.log("inputValue : ",inputValue);
      console.log("searchInput.value : ",searchInput.value);
      filteredProducts = products.filter((product)=>{
                 return product.title.toLowerCase().includes(inputValue);
      });
      console.log(filteredProducts);
      generateCart(filteredProducts);
});
// company button 
const companyDOM = document.querySelector('.companies');
function displayButtons (){
  const Allcompanies = ['all', ...new Set(products.map((product)=> product.company))];
  console.log(Allcompanies);
  const companyButton = Allcompanies.map((company)=>{
         console.log(company);
        return `<button class="company-btn">${company}</button>`
  }).join(' ');
  console.log(companyButton);
  console.log(companyDOM);
  companyDOM.innerHTML = companyButton;
}
displayButtons ();

//  filter based on company 
console.log("companyDOM : ",companyDOM);
console.log("companyDOM typeof : ",typeof companyDOM);
companyDOM.addEventListener("click", function(company){
      console.log("company : ", company);
      console.log("company.target",company.target);
      console.log("company.target.textContent",company.target.textContent);
      if(company.target.textContent === "all"){
          filteredProducts = [...products];
      }
    else  filteredProducts = products.filter((product)=> company.target.textContent == product.company);
      console.log(filteredProducts);
      generateCart(filteredProducts);
});
generateCart(filteredProducts);