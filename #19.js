//Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript



/*function alienLanguage(str) {

    let words = str.toUpperCase().split(" ")
        .map(lastLetters => lastLetters.replace(lastLetters.length - 1, lastLetters[lastLetters.length - 1].toLowerCase()))
        .join(' ');


    return words;
}


function alienLanguage(str) {
    let words = str.toUpperCase()
                    .split(" ")
                    .map(lastLetters => lastLetters.replace(lastLetters.length - 1, lastLetters[lastLetters.length - 1]['toLowerCase']()))
                    .join(' ');
    return words;
  }*/


  function alienLanguage(str) {
    return str.toUpperCase()
      .split(" ")
      .map(word => word.slice(0, -1) + word.slice(-1).toLowerCase())
      .join(" ");
  }
  
  


alienLanguage("My name is John"),// "My NAMe Is JOHn");
    alienLanguage("this is an example"),// "THIs Is An EXAMPLe");
    alienLanguage("Hello World"),// "HELLo WORLd");
    alienLanguage("HELLO WORLD"); //"HELLo WORLd");