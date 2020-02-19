// eslint-env jasmine

describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array of 1', function() {
    expect(bubbleSort([7])).toEqual([7]);
  });

  it('works on an array already in order', function() {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('sorts an array of numbers', function() {
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
    expect(bubbleSort([6, 3, 2, 7, 4, 5, 1])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('sorts an array of strings', function() {
    expect(bubbleSort(['elephant', 'alligator', 'bee', 'dog', 'cat'])).toEqual([
      'alligator',
      'bee',
      'cat',
      'dog',
      'elephant',
    ]);
  });
});
