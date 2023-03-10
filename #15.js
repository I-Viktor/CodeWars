//Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript



function howManySmaller(arr, n) {
    //coding here..
    let raunded = arr.map(number => number.toFixed(2));
    let lesserN = raunded.filter(num => num < n)
    return lesserN.length;
}
``
howManySmaller([1.234, 1.235, 1.228], 1.24)//, 2);
howManySmaller([1.1888, 1.1868, 1.1838], 1.19)//, 1);
howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)//, 2);