

function tailAndHead(arr) {
    const heads = arr.map(num => Number(num.toString().slice(0, 1))).slice(1, arr.length);
    const tails = arr.map(numL => Number(numL.toString().slice(-1))).slice(0, arr.length - 1);
    let result = []
    for (i = 0; i < heads.length; i++) {
        let sum = heads[i] + tails[i]
        result.push(sum)
    }
    return result.reduce((a, b) => a * b)
}










tailAndHead([123, 456, 789, 12, 34, 56, 78]),// 532350);
    tailAndHead([1, 2, 3, 4, 5]),// 945);
    tailAndHead([111, 2345, 66, 78, 900]), //7293);
    tailAndHead([35456, 782, 569, 2454, 875])// , 12012);
