type Merge = (left: number[], right: number[]) => number[];
const merge: Merge = (left, right) => {
  const mergedNumbers = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) mergedNumbers.push(left.shift());
    else mergedNumbers.push(right.shift());
  }

  return mergedNumbers.concat(left).concat(right);
};

type Split = (numbers: number[]) => { left: number[]; right: number[] };
const split: Split = numbers => ({
  left: numbers.slice(0, Math.floor(numbers.length / 2)),
  right: numbers.slice(Math.floor(numbers.length / 2)),
});

type MergeSort = (numbers: number[]) => number[];
const mergeSort: MergeSort = (numbers = []) => {
  if (numbers.length <= 1) return numbers;

  const { left, right } = split(numbers);

  return merge(mergeSort(left), mergeSort(right));
};

export = mergeSort;
