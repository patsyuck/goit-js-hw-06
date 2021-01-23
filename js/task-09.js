function changeEven(numbers, value) {
  const arr = []
  numbers.forEach(item => {
      if (item % 2 === 0) {
        arr.push(item + value)
      } else {
        arr.push(item)
      }
  })
  return arr
}
