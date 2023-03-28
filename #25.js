//https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript


function sortIt(arr) {
    let newArr = [...arr];
    return newArr.sort((a, b) => (b - a === 0) ? b - a : a - b)

}




sortIt([13,13,7,13,13,16,7,13,13,16,16,16,13,13]), //[7, 7, 16, 16, 16, 16, 13, 13, 13, 13, 13, 13, 13, 13]
    sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]), //[3, 3, 3, 2, 2, 2, 1, 1, 1]);
    sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]) //[3, 2, 1, 6, 6, 5, 5, 4, 4]);