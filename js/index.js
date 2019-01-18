const merge = (left, right) => {
  const mergedNumbers = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) mergedNumbers.push(left.shift());
    else mergedNumbers.push(right.shift());
  }
  const mergedResult = mergedNumbers.concat(left).concat(right);
  return mergedResult;
};
const split = numbers => ({
  left: numbers.slice(0, Math.floor(numbers.length / 2)),
  right: numbers.slice(Math.floor(numbers.length / 2)),
});
const mergeSort = (numbers = []) => {
  if (numbers.length <= 1) return numbers;
  const { left, right } = split(numbers);
  return merge(mergeSort(left), mergeSort(right));
};
module.exports = mergeSort;
//# sourceMappingURL=index.js.map
