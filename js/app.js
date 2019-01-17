//document.getElementById("cart-info").addEventListener("click", function() {
  //const cart = document.getElementById("cart");
  //cart.classList.toggle("show-cart");
  //console.log(cart);
//});

/* donot work here or in $(document).ready(function(){}) 
(function(){

  var c = document.querySelector('.shopping-card');

 function showcart()
{
  if( c.style.right == '-22%' )

    c.style.right='0';

    else

    c.style.right='-22%';
 }


}())

*/



  //var a = document.querySelector('.contact-btn .btn-overlay');
  //a.addEventListener('onmouseenter',function(){
  //  a.setAttribute('class',' wow bounce btn-overlay btn text-capitalize ');
  //})


  (function(){
    let c = document.querySelector('.shopping-card'); //first click doesnot work
    let showbutton =document.querySelector('.card-info');
    showbutton.addEventListener("click", () => {
      if( c.style.right == '-50%' )
      {
       c.style.right='0';
       c.style.transform='rotateY(-360deg)';
      }
       else{
         c.style.right='-50%';
         c.style.transform='rotateY(360deg)';
       }
    })
  }())


/*
function showcart() //first click doesnot work
{
  
  if( c.style.right == '-50%' )
  {
   c.style.right='0';
   c.style.transform='rotateY(-360deg)';
  }
   else{
     c.style.right='-50%';
     c.style.transform='rotateY(360deg)';
   }
}
//c.classList.toggle('')
btn.firstChild.addEventListener("click", (e) => {
      console.log(e.target)
    })
*/



// Add Item To Cart 

(function(){

  let btnstore = document.querySelectorAll('.card-icon');
  btnstore.forEach((btn) => {
     btn.firstElementChild.addEventListener("click",() => {
      //===================================================== display img in cart 
      let imgSrc =  btn.previousElementSibling.src;
      let startOfCut = imgSrc.indexOf('img');
      let newPath = imgSrc.slice(startOfCut +3)
      //====================================================== display type and price in cart 
      let itemTitle = btn.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.textContent;
      let itemPrice = btn.parentElement.parentElement.lastElementChild.firstElementChild.lastElementChild.textContent;
      //====================================================== display New cart item 
      let cartItem = document.createElement('div');

      cartItem.setAttribute("class","card-item d-flex justify-content-around my-5");

    
      cartItem.innerHTML = '\
      <img src=" img-cart'+ newPath +'" class="rounded-circle img-fluid">\
      <div class="item-text">\
          <p class="text-capitalize mb-0">'+ itemTitle +'</p>\
          <span>'+ itemPrice +'</span>\
      </div>\
      <a id="cart-icon-remove" class="cart-icon-remove" href="#"><i class="fas fa-trash"></i></a>';

      // insert item in cart
      let cartTotal = document.querySelector('.cart-total-container');
      let shoppingCard = document.querySelector('.shopping-card');
      shoppingCard.insertBefore(cartItem,cartTotal)
      


     //====================================================== display total price 
      //let itemsTotalPrices = document.querySelectorAll('item-text span');
      //console.log(itemsTotalPrices);
      //console.log(document.querySelector('.cart-total-container p').textContent);



      

    })

    
  });
  
}())
  


