// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
// Training JS #29: methods of arrayObject---concat() and join()

function bigToSmall(arr) {
    let newArr = [].concat(...arr).sort((a, b) => b - a).join('>');
    return newArr;
}




bigToSmall([[1, 2], [3, 4], [5, 6]]),// "6>5>4>3>2>1");
    bigToSmall([[1, 3, 5], [2, 4, 6]]), //"6>5>4>3>2>1");
    bigToSmall([[1, 1], [1], [1, 1]]) //, "1>1>1>1>1");