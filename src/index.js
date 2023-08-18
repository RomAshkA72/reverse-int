module.exports = function reverse (n) {
    const absNum = Math.abs(n);
    const reversNumber = parseFloat(absNum.toString().split('').reverse().join(''));
    return  reversNumber;
}
