function findPricingIndex(measurement,measurementGrid) {
  var index = 0;
  while ((measurement > measurementGrid[index]) && (index != (measurementGrid.length+1))) {
    index++;
  }
  if (index == measurementGrid.length)
    return -1;
  else
    return index;
}
    
