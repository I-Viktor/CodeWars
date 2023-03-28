//  https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript


function isolateIt(arr) {
    return arr.map(str => (str.length % 2 === 0) ? str.slice(0, str.length / 2) + '|' + str.slice(str.length / 2, str.length) :
        str.slice(0, (str.length - 1) / 2) + '|' + str.slice((str.length + 1) / 2, str.length));
}





isolateIt(["abcrd", "efgh"]), //["ab|cd","ef|gh"]);
    isolateIt(["abcde", "fghij"]), //["ab|de","fg|ij"]);
    isolateIt(["1234", "56789"])  //["12|34","56|89"]);