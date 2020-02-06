const bubbleSort = (arr) => {
  let stopIndex = arr.length - 1;
  let swapped = false;
  do {
    for (let i = 0; i < stopIndex; i += 1) {
      swapped = false;
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
      console.log(`${i} ${stopIndex} after ${arr} - ${swapped}`);
    }
    stopIndex -= 1;
  }
  while (swapped && stopIndex > 0);
  return arr;
};
console.log('result',
  bubbleSort([0, 4, 0, 10, -3])
);
