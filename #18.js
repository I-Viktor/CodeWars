// Training JS #18: Methods of String object--concat() split() and its good friend join()
//https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript


function splitAndMerge(str, separator) {

    let words = str.split(" ");

    let charsJoined = words.map(word => word.split("").join(separator));

    let result = charsJoined.join(" ");

    return result;
}

splitAndMerge("My name is John", " ");// "M y n a m e i s J o h n");
splitAndMerge("My name is John", "-");// "M-y n-a-m-e i-s J-o-h-n");
splitAndMerge("Hello World!", ".");// "H.e.l.l.o W.o.r.l.d.!");
splitAndMerge("Hello World!", ","); //"H,e,l,l,o W,o,r,l,d,!"