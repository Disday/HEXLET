/* eslint-disable no-restricted-syntax */
const makeCensored = (str, stopWords) => {
  const stringAsArray = str.split(' ');
  const resultedArray = [];
  const censor = '$#%!';
  for (const word of stringAsArray) {
    const replacedWord = stopWords.includes(word) ? censor : word;
    console.log(`${word}-${replacedWord}`);
    resultedArray.push(replacedWord);
  }
  return resultedArray.join(' ');
};
console.log(makeCensored('When you play the game of thrones, you win or you die',
  ['play', 'you']));
