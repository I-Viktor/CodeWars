// Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript


function giveMeFive(obj) {
    //coding here
    const arr = []
    for (let key in obj) {
        if (key.length === 5) {
            arr.push(key)
        }
        if (obj[key].length === 5) {
            arr.push(obj[key])
        }
    }
    return arr
}








giveMeFive({ Our: [1,2,3,4,5], is: "a", beautyful: "world" })//,["earth","world"]);
giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" })//,["Ihave","money","model"]);
giveMeFive({ Pears: "than", apple: "sweet" })//,["Pears",//