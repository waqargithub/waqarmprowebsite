function returnWindowTreatmentTypeIndex(windowTreatmentType, windowTreatmentArray) {
  var index = 0;

  while ((windowTreatmentType != windowTreatmentArray[index]) && (index<=windowTreatmentArray.length)) {
    index++
  }
  if (index == windowTreatmentArray.length)
    return -1;
  else
    return index;
}
