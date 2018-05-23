var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var newItem = {
    itemName: item,
    itemPrice: price,
  };
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    
    var inCart = 'In your cart, you have';
    
    for (var i = 0; i < cart.length; i++){
      if(cart.length === 1){
        inCart += ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
    } else if(cart.length === 2){
       inCart += ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
      } else {
        inCart += ``;
      }
    }
    return inCart;
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
