function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function(item) {
    totalPrice += item;
  })

  return totalPrice;
}
