let cart = document.getElementById("ccart");

let addItemId = 0;

function addToCart(item) {
  addItemId += 1;
  let selectedItems = document.createElement('div');

  selectedItems.classList.add("cartCard");

  selectedItems.classList.add('cartImg');
  selectedItems.setAttribute('id', addItemId);
  let img = document.createElement('img');
  img.setAttribute('src',item.children[0].currentSrc);

  let title = document.createElement('h1');
  selectedItems.classList.add("cartH");
  title.innerText = item.children[1].innerText;

  let lable = document.createElement('h3');
  selectedItems.classList.add("cartH3");
  lable.innerText = item.children[2].innerText;

  let dltBtn = document.createElement('button');
  selectedItems.classList.add("btn");
  dltBtn.innerText = "Remove From Cart";
  dltBtn.setAttribute("onclick","del("+addItemId+")");

  let cardItems = document.getElementById('Cart');
  selectedItems.append(img);
  selectedItems.append(title);
  selectedItems.append(lable);
  selectedItems.append(dltBtn);
  cardItems.append(selectedItems);

  
}

function del(item) {
  document.getElementById(item).remove();
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    localStorage.setItem('cartNumbers' , productNumbers - 1);
    document.querySelector('#cart span').textContent = productNumbers - 1;
    
  }
}
// Total
// --------------------------------------------------------
let productsPrice =[
  {Price:35},{Price:26},{Price:135},{Price:140},{Price:235}
];
function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  
  console.log("my cost", cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost",cartCost + product.Price);
  }
  else{
    localStorage.setItem("totalCost",product.Price);
  }
}

let totalButton = document.getElementById("totalButton");
totalButton.setAttribute("onclick","total()");

function total() {
  let cartCost = localStorage.getItem("totalCost");
 
  let showTotal = document.getElementById("showtotal");
    showTotal.innerText +=`
    ${cartCost},000 KD
    `
}

// Counter
// -------------------------------------------------------
let carts = document.querySelectorAll('.button');

for (let i = 0; i < carts.length; i++) {
   carts[i].addEventListener('click', () =>{
    cartNumbers();
    totalCost(productsPrice[i]);
   })
  
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('#cart span').textContent = productNumbers;
  }
}

function cartNumbers() {
   let productNumbers = localStorage.getItem('cartNumbers');

   productNumbers = parseInt(productNumbers);

   if (productNumbers) {
    localStorage.setItem('cartNumbers' , productNumbers + 1);
    document.querySelector('#cart span').textContent = productNumbers + 1;
   }
   else{
    localStorage.setItem('cartNumbers' ,1);
    document.querySelector('#cart span').textContent = 1;
   }
}
onLoadCartNumbers();

// animations
// ----------------------------------------------------------

