 function calculateShipping(width) {
   var shippingCost = 0;
   if (width == 0)
    return shippingCost;
   else {
    if (width < 60)
      shippingCost = 15;
    else
      if (width > 96)
        shippingCost = 150;
      else
        shippingCost = 25;
    }
   return shippingCost;
 }
