// eslint-env jasmine

describe('Merge Sort', function() {
  const testCompare = (a, b) => {
    if (a <= b) {
      return false
    } else {
      return true
    }
  }
  it('handles an empty array', function() {
    expect(mergeSort([], testCompare)).toEqual([]);
  });

  it('handles an array of 1', function() {
    expect(mergeSort([7], testCompare)).toEqual([7]);
  });

  it('works on an array already in order', function() {
    expect(mergeSort([1, 2, 3], testCompare)).toEqual([1, 2, 3]);
  });

  it('sorts an array of numbers', function() {
    expect(mergeSort([3, 1, 2], testCompare)).toEqual([1, 2, 3]);
    expect(mergeSort([6, 3, 2, 7, 4, 5, 1], testCompare)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('sorts an array of strings', function() {
    expect(mergeSort(['elephant', 'alligator', 'bee', 'dog', 'cat'], testCompare)).toEqual([
      'alligator',
      'bee',
      'cat',
      'dog',
      'elephant',
    ]);
  });

  it('sorts with different comparator', function() {
    const objectCompare = (a,b) => a.name > b.name
    expect(mergeSort([{name: 'anna'}, {name: 'jenn'}, {name: 'frank'}], objectCompare)).toEqual([{name: 'anna'}, {name: 'frank'}, {name: 'jenn'}]);
  });
});
