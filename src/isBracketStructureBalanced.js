const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];
// BEGIN (write your solution here)
const isBracketStructureBalanced = (str) => {
  const openingIndex = (symbol) => openingSymbols.indexOf(symbol);
  const closingIndex = (symbol) => closingSymbols.indexOf(symbol);
  const stack = [];
  for (const symbol of str) {
    if (openingIndex(symbol) > -1) {
      stack.push(symbol);
    } else if (openingIndex(stack.pop()) !== closingIndex(symbol)) {
      return false;
    }
  }
  return !(stack.length > 0);
};
export default isBracketStructureBalanced;
// END
