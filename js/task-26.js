const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(val => val % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(val => val % 2 === 1);

const eachElementInSecondIsEven = secondArray.every(val => val % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(val => val % 2 === 1);

const eachElementInThirdIsEven = thirdArray.every(val => val % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(val => val % 2 === 1);
