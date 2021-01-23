function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
  
    firstArray.forEach(function(item) {
      if (secondArray.includes(item)) {
        commonElements.push(item);
      }
    })
  
    return commonElements;
}
