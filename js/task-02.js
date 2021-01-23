function filterArray(numbers, value) {
    const filteredNumbers = [];
  
    numbers.forEach(function(number) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    })
  
    return filteredNumbers;
  }
