/* Wait for document to load */
$(document).ready(function () {
  /* Grab numbers from HTML */
  let price1 = $('#price1').text().replace('$', '');
  
  let itemQuantity = $('#itemQuantity').text();
  let price2 = $('#price2').text().replace('$', '');

  price1 = parseFloat(price1);
  itemQuantity = parseFloat(itemQuantity);
  price2 = parseFloat(price2);

  /* Declare Variables for functions */
  const add = $('#plus');
  const subtract = $('#minus');

  /* Add one quantity to the cart */
  add.on('click', function() {
    price1 += 15;
    itemQuantity += 1;
    let updatePrice1 = $('#price1');
    let updateQuantity = $('#itemQuantity');

    updateQuantity.text(itemQuantity);
    updatePrice1.text("$" + price1);

    let total = price1 + price2;

    let updateTotal = $('#totalCost');
    updateTotal.text("Checkout - $" + total)
  });

  subtract.on('click', function() {
    price1 -= 15;
    itemQuantity -= 1;
    let updatePrice1 = $('#price1');
    let updateQuantity = $('#itemQuantity');

    updateQuantity.text(itemQuantity);
    updatePrice1.text("$" + price1);

    let total = price1 + price2;

    let updateTotal = $('#totalCost');
    updateTotal.text("Checkout - $" + total)
  });

  let total = price1 + price2;

  let updateTotal = $('#totalCost');
  updateTotal.text("Checkout - $" + total)
});