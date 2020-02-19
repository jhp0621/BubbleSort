// eslint-env jasmine
describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,3,6,7])).toEqual([[1,3], [6,7]])
  });

  it('is able to split an odd-number array into two halves', function() {
    expect(split([5,4,8])).toEqual([[5], [4,8]])
  });

  it('can handle array with one element', function() {
    expect(split([2])).toEqual([2])
  })
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1,6], [3,7])).toEqual([1,3,6,7])
  });

  it('is able to merge odd-number arrays into one', function() {
    expect(merge([4], [5,8])).toEqual([4,5,8])
    expect(merge([2,8],[4])).toEqual([2, 4, 8])
  });

  it('can handle arrays with one element', function() {
    expect(merge([2],[4])).toEqual([2, 4])
  });
});

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
