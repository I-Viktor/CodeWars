// Training JS #21: Methods of String object--trim() and the string template
// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript


function fiveLine(s) {
    //coding here...
    let str = s.trim();

    return `${str}\n${str + str}\n${str + str + str}\n${str + str + str + str}\n${str + str + str + str + str}`;

}


fiveLine("  a"), //"a\naa\naaa\naaaa\naaaaa");
    fiveLine("\txy \n"), //"xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
    fiveLine("           Ok               "); //"Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk")