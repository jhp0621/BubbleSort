

const bubbleSort = (arr, comparator) => {
  const sorted = [...arr]
  for (let i = sorted.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++){
      if (comparator(sorted[j],sorted[j+1])) {
        let swapper = sorted[j]
        sorted[j] = sorted[j+1]
        sorted[j+1] = swapper
        console.log()
      }
    }
  }
  return sorted
}



