//   https://www.codewars.com/kata/57308546bd9f0987c2000d07/train/javascript

function mirrorImage(arr) {

    let a = 0;
    let b = 0;

    return arr.some((x, i) => {
        a = arr[i];
        b = arr[i + 1];
        return String(a) === String(b).split("").reverse().join("")

    }) ? [a, b] : [-1, -1];
    ;

}



mirrorImage([11, 22, 33, 33, 22, 11]),// [33,33]);
    mirrorImage([454, 86, 57, 75, 16, 88]), //[57,75]);
    mirrorImage([454, 0, 57, 0, 16, 88]) //, [-1,-1]);



    // var y=x.split("").reverse().join("");
/*
arr.some((x,i)=>{
a=arr[i];  //or a=x
b=arr[i+1];
return a+b==15
*/