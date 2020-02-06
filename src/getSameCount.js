const countUniqChars = str => {
  const stringAsArray = str.split('');
  let counter = 0;
  // const haveDupllicate = (symbol, array) => {
  //   for (const elem of array) {
  //     if (symbol === elem) {
  //       count += 1;
  // }
  for (const symbol of stringAsArray) {
    let start = stringAsArray.indexOf(symbol) + 1;
    // console.log(start);
      
    if (stringAsArray.includes(symbol, start)/* && symbol !== ' '*/) {
      counter += 1;
    }
  }
  return counter;
}
const text2 = 'You know nothing Jon Snow';
console.log(
  countUniqChars(text2) // 13
);