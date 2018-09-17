var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100+1);
   cart.push({itemName: item, itemPrice : price} );
   return `${item} has been added to your cart.`

}

function viewCart() {
 if (cart.length === 0) {
    return "Your shopping cart is empty."

 } else if (cart.length === 1) {

    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
}
    else if (cart.length >= 2) {
    var mystring = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
      if (i < cart.length-1) {
        mystring += `${cart[i].itemName} at $${cart[i].itemPrice}, `

      }
    else if(i === cart.length-1) {
      mystring += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
     }
   }
   return mystring
  }
}


function total() {
  var sum = 0;
  for (var i = 0; i <cart.length; i++) {
    sum = sum + cart[i].itemPrice
  }
 return sum
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here

}
