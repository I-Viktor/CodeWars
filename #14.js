//Training JS #14: Methods of Number object--toString() and toLocaleString()
//https://www.codewars.com/kata/57238ceaef9008adc7000603


function colorOf(r, g, b) {
    let red = r.toString(16);
    let green = g.toString(16);
    let blue = b.toString(16);

    red = red.length < 2 ? '0' + red : red;
    green = green.length < 2 ? '0' + green : green;
    blue = blue.length < 2 ? '0' + blue : blue;



    return `#${red}${green}${blue}`;
}



// Irena 
/*
function colorOf(r, g, b) {
    let colorR = ${
        r <= 15 ? "0" : ""
}${
    r.toString(16)
};
let colorG = ${
    g <= 15 ? "0" : ""}${
    g.toString(16)
};
let colorB = ${
    b <= 15 ? "0" : ""}${
    b.toString(16)
};

return '#' + colorR + colorG + colorB 
    }
*/
