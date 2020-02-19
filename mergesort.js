function split(wholeArray) {
  let n = wholeArray.length;
  if (n > 1) {
    let half = Math.floor(n / 2);

    let firstHalf = wholeArray.slice(0, half);
    let secondHalf = wholeArray.slice(half);
    return [firstHalf, secondHalf];
  } else {
    return wholeArray;
  }
}

function merge(arr1, arr2) {
  let outputArr = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      outputArr.push(arr1.shift());
    } else {
      outputArr.push(arr2.shift());
    }
  }

  if (arr1.length > 0) {
    outputArr = outputArr.concat(arr1);
  }

  if (arr2.length > 0) {
    outputArr = outputArr.concat(arr2);
  }

  return outputArr;
}
