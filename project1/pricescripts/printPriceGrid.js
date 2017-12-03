function printPriceGrid(pricePerSqFt, gridWidths, gridHeights)
{
var priceGrid = new Array(gridWidths.length*gridHeights.length);
priceGrid = calculatePriceGrid(pricePerSqFt, gridWidths, gridHeights);

var summarySent1="This table gives the price grid for a blind based on width and height of a blind. "
var summarySent2="The width is specified in each column. "
var summarySent3="The height is specified in each row. "
var summarySent4="Each entry in table gives price of blind up to the corresponding width and height for that entry."
var summarySent5="For example, the entry for width 36 and length 48 gives price of blind with width upto 36 inches "
var summarySent6="but greater than 24 inches from the previous column, "
var summarySent7="and height upto 48 inches but greater than 36 inches inches from the previous row."
document.write('<Table summary="'+summarySent1+summarySent2+summarySent3+summarySent4+summarySent5+summarySent6+summarySent7+'">');

// write the first row with headers, which lists the width threshholds in the price grid.

document.write('<tr>');
document.write('<th id="height">Height\\Width</th>');
for (columnCount=0; columnCount < gridWidths.length; columnCount++)
  {
  document.write('<th id="'+gridWidths[columnCount]+'">'+gridWidths[columnCount]+'</th>');
  }
document.write('</tr>');
for (rowCount=0; rowCount < gridHeights.length; rowCount++)
  {
  document.write('<tr>');
  document.write('<td headers="height" class="heights">'+gridHeights[rowCount]+'</td>');
  for (colCount=0; colCount < gridWidths.length; colCount++)
    {  
    priceGridIndex=(gridHeights.length-1)*rowCount+colCount;
    document.write('<td headers="'+gridWidths[colCount]+'">$'+priceGrid[priceGridIndex].toFixed(2)+'</td>');
    } //inner for loop no. 2
  document.write('</tr>');
  } //outer of for loop no. 2
document.write('</table>');

} 

//function printPriceGrid  

