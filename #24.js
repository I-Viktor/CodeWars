//  https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

function threeInOne(arr) {
    let copy = arr.slice();
    let newArr = [];

    for (i = 0; i < copy.length; i + 3) {
        let add = copy.splice(0, 3);
        let result = add[0] + add[1] + add[2];
        newArr.push(result)
    }


    return newArr;
}

threeInOne([1, 2, 3]),// [6]);
    threeInOne([1, 2, 3, 4, 5, 6]),// [6, 15]);
    threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]) //, [6, 15, 24]);