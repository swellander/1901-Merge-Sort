type Split = (numbers: number[]) => { left: number[]; right: number[] };
const split: Split = numbers => ({
  left: numbers.slice(0, Math.ceil(numbers.length / 2)),
  right: numbers.slice(Math.ceil(numbers.length / 2)),
});

type Merge = (left: number[], right: number[]) => number[];
const merge: Merge = (left, right) => {
  const mergedNumbers = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) mergedNumbers.push(left.shift());
    else mergedNumbers.push(right.shift());
  }

  return mergedNumbers.concat(left).concat(right);
};

type MergeSort = (numbers: number[]) => number[];
const mergeSort: MergeSort = (numbers = []) => {
  // Base Case
  if (numbers.length <= 1) return numbers;

  // Splitting
  const { left, right } = split(numbers);

  // Merging - Sorting
  return merge(mergeSort(left), mergeSort(right));
};

// Dont worry about the export syntax, just a quirk of the live testing framework Im using.
export = mergeSort;
