function calculatePriceGrid (pricePerSqFoot, gridWidths, gridHeights)
{
var priceGridSize = gridWidths.length*gridHeights.length;
var priceGrid = new Array(priceGridSize);
var priceGridIndex=0;
for (widthIndex=0; widthIndex < gridWidths.length; widthIndex++)
  {
  for (heightIndex=0; heightIndex < gridHeights.length; heightIndex++)
    {
    priceGridIndex=(gridHeights.length)*heightIndex+widthIndex;
    priceGrid[priceGridIndex]=pricePerSqFoot*gridWidths[widthIndex]*gridHeights[heightIndex]/144;
    }
  }
return priceGrid;
}
