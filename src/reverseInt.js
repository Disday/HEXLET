const reverseInt = num => {
    const stringedAbs = String(Math.abs(num));
    const last = stringedAbs.length - 1;
    const reverse = (i, str)=> {
        if (i >= 0){
            return str[i] + reverse(i-1, str);
        }
        return '';
    };
    const reversed = (reverse(last, stringedAbs));
    return num >= 0 ? +reversed : -reversed;
};
const res = reverseInt(-12345);
console.log('res', typeof(res), res);
