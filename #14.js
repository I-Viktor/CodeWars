function colorOf(r, g, b) {
    let red = r.toString(16); (red < 16) ? '0' + red 
    let green = g.toString(16); (green < 16) ? '0' + green;
    let blue = b.toString(16); (blue < 16) ? '0' + blue;



    return '#' + ${ red } + ${ green } + ${ blue };
}




// Irena 
function colorOf(r, g, b) {
    let colorR = ${ r <= 15 ? "0" : ""
}${ r.toString(16) };
let colorG = ${ g <= 15 ? "0" : ""}${ g.toString(16) };
let colorB = ${ b <= 15 ? "0" : ""}${ b.toString(16) };

return '#' + colorR + colorG + colorB 
    }