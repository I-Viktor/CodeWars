//Training JS #11: loop statement --break,continue
//https://www.codewars.com/kata/5721c189cdd71194c1000b9b/solutions/javascript

function grabDoll(dolls) {
    var bag = [];
    //coding here
    for (const name of dolls) {
        if (name === "Hello Kitty" || name === "Barbie doll") {
            bag.push(name);
        }
        if (bag.length === 3) {
            break;
        }
        else {
            continue;
        }
    }

    return bag;
}


grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]   //),["Hello Kitty"]);

grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]   //),["Hello Kitty","Hello Kitty"]);

grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]   //),["Hello Kitty","Hello Kitty","Barbie doll"]);

grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]   //),["Barbie doll","Hello Kitt   //