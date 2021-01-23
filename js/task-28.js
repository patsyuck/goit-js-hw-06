const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some(elem => elem % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(elem => elem % 2 === 1);

const anyElementInSecondIsEven = secondArray.some(elem => elem % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(elem => elem % 2 === 1);

const anyElementInThirdIsEven = thirdArray.some(elem => elem % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(elem => elem % 2 === 1);
