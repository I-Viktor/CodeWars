//Training JS #13: Number object and its properties
//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/solutions/javascript?filter=me&sort=best_practice&invalids=false



function whatNumberIsIt(n) {
    //coding here
    if (Number.isNaN(n)) {
        return "Input number is Number.NaN";
    } else if (n === Number.MAX_VALUE) {
        return "Input number is Number.MAX_VALUE";
    } else if (n === Number.MIN_VALUE) {
        return "Input number is Number.MIN_VALUE";
    } else if (n === Number.NEGATIVE_INFINITY) {
        return "Input number is Number.NEGATIVE_INFINITY";
    } else if (n === Number.POSITIVE_INFINITY) {
        return "Input number is Number.POSITIVE_INFINITY";
    } else {
        return "input number is " + n;
    }
}

whatNumberIsIt(1 / 0)   //,"Input number is Number.POSITIVE_INFINITY");
whatNumberIsIt(100)   //,"Input number is 100");
whatNumberIsIt(1.7976931348623157e+308)   //,"Input number is Number.MAX_VALUE");
whatNumberIsIt(5e-324)   //,"Input number is Number.MIN_VALUE");
whatNumberIsIt(-Number.MAX_VALUE * 2)   //,"Input number is Number.NEGATIVE_INFINITY");
whatNumberIsIt(NaN)   //,"Input number is Number.NaN");
whatNumberIsIt(Infinity + 1)   //,"Input number is Number.POSITIVE_INFINITY");
