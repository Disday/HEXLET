const getSameParity = (arr) => {
  const resultArray = [];
  const isFisrtEven = arr[0] % 2 === 0;
  // console.log(isFisrtEven );
  for (const elem of arr) {
    const isCurrentEven = elem % 2 === 0;

    if (isCurrentEven === isFisrtEven) {
      resultArray.push(elem);
    }
  }
  return resultArray;
};
const arr = [-1, 4, 5];
console.log(getSameParity(arr));
