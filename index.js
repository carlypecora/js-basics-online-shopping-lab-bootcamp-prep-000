var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({["itemName"]: item, ["itemPrice"]: price})
  return `${item} has been added to your cart.`
}

// function viewCart() {
//     // First get the total number of keys in
//     // in the dictionary
//     var totalKeys = 0
//     for (var i=0; i<cart.length;i++) {
//         totalKeys = totalKeys + Object.keys(cart[i]).length
//     }

//     var cartStr = "In your cart, you have"
//     var keyCounter = 0
//     for (var i=0;i<cart.length;i++) {
//         for (key in cart[i]) {
//             var newStr = " " + key + " at $" + cart[i][key]
//             // if we're at the last item
//             // use an `and`
//             if (keyCounter === (totalKeys - 1)) {
//                 newStr = " and" + newStr + "."
//             } else {
//                 newStr = newStr + ","
//             }
//             cartStr = cartStr + newStr
//             keyCounter++
//         }
//     }
//     return cartStr
// }
// console.log(viewCart())

function viewCart(){
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  var str = "In your cart, you have "
  for(var i = 0; i < cart.length; i++){
    var newStr = `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`
    if(cart.length === 1){
      return str + newStr + "."
    }
    if(i === cart.length - 1){
      newStr = `, and ${newStr}.`
    } else if(i < cart.length - 1 && i > 0){
      newStr = `, ${newStr}`
    }
    str = str + newStr
  }
  return str
}



function total() {
  var counter = 0
  for(var i = 0; i < cart.length; i++){
    
  }
  return counter
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(cart[i]["itemName"] === item){
      delete cart[i]
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
}
