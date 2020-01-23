const moneyCount = (money, currency) => {
  if (money.length === 0) {
    return null;
  }
  let sum = 0;
  const getSpaceIndex = (str) => {
    if (str[0] === ' ') {
      return 0;
    }
    return 1 + getSpaceIndex(str.slice(1));
  };
  for (const elem of money) {
    const spaceIndex = getSpaceIndex(elem);
    const cur = elem.slice(0, spaceIndex);
    const value = elem.slice(spaceIndex + 1);
    // console.log(`${cur}-${value}`) ;
    if (cur !== currency) {
      continue;
    }
    sum += Number(value);
  }
  return sum;
};
// export default moneyCount;
const money1 = ['eur 10', 'dollar 15', 'usd 10', 'dollar 50', 'usd 5'];
console.log(moneyCount(money1, 'dollar'));
