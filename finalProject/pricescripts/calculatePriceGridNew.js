function calculatePriceGrid (pricePerSqFoot, gridWidths, gridHeights)
{
var priceGridSize = gridWidths.length*gridHeights.length;
var priceGrid = new Array(priceGridSize);
var priceGridIndex=0;
for (heightIndex=0; heightIndex < gridHeights.length; heightIndex++)
  {
  for (widthIndex=0; widthIndex < gridWidths.length; widthIndex++)
    {
    priceGridIndex=(gridWidths.length)*heightIndex+widthIndex;
    priceGrid[priceGridIndex]=pricePerSqFoot*gridWidths[widthIndex]*gridHeights[heightIndex]/144;
    }
  }
return priceGrid;
}
