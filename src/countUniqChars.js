const countUniqChars = str => {
    // const stringAsArray = str.split('');
    // console.log(stringAsArray);
    let resultedArray = [];
    for (const symbol of str) {
        if (!resultedArray.includes(symbol)) {
            resultedArray.push(symbol);
        }
    }
return resultedArray.length;
}
console.log(
countUniqChars('qwdrf1v412v'));
