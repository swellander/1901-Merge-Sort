const split = numbers => ({
  left: numbers.slice(0, Math.ceil(numbers.length / 2)),
  right: numbers.slice(Math.ceil(numbers.length / 2)),
});
const merge = (left, right) => {
  const mergedNumbers = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) mergedNumbers.push(left.shift());
    else mergedNumbers.push(right.shift());
  }
  return mergedNumbers.concat(left).concat(right);
};
const mergeSort = (numbers = []) => {
  // Base Case
  if (numbers.length <= 1) return numbers;
  // Splitting
  const { left, right } = split(numbers);
  // Merging - Sorting
  return merge(mergeSort(left), mergeSort(right));
};
module.exports = mergeSort;
//# sourceMappingURL=index.js.map
