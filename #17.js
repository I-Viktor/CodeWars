//Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript


function firstToLast(str, c) {
    let lastLetter = str.lastIndexOf(c);
    let firsLetter = str.indexOf(c);

    let result = lastLetter - firsLetter;
    if (lastLetter === -1) {
        return 0;
    }
    return result;

}


firstToLast("ababc", "a")//, 2);
firstToLast("ababc", "c")//, 0);
firstToLast("ababc", "d")//, -1);