const mergeSort = require('../src/index');

// We could have done meaningful tests of the helper funcs
describe('MergeSort', () => {
  test('is a function', () => {
    expect(typeof mergeSort).toBe('function');
  });

  test('returns an array', () => {
    expect(Array.isArray(mergeSort())).toBe(true);
  });

  test('sorts an array', () => {
    const unsortedNums = [5, 2, 1, 9, 4, 10, 7];
    const sortedNums = unsortedNums.slice();
    sortedNums.sort((a, b) => a - b);

    expect(mergeSort(unsortedNums)).toEqual(sortedNums);
  });

  test('sorts an array of strings', () => {
    expect(mergeSort(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
  })
});
