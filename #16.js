// Training JS #16: Methods of String object--slice(), substring() and substr()
// https://www.codewars.com/kata/57274562c8dcebe77e001012

function test(arr) {

    let smallerString = arr.reduce((a, b) => a.length <= b.length ? a : b);
    const newArr = [...arr.map(stringInArr => (stringInArr.length >= smallerString.length) ? stringInArr.slice(0, smallerString.length) : "")]

    return newArr


}



test(["dfsd", "fgr", "fe", "fssdfs", "kyk"])