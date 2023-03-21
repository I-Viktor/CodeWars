// https://www.codewars.com/kata/572af273a3af3836660014a1https://www.codewars.com/kata/572af273a3af3836660014a1

function infiniteLoop(arr, d, n) {
   for (i = 0; i < n; i++) {
      if (d === "left") {
         arr[2].push(arr[0].shift());
         arr[1].push(arr[2].shift());
         arr[0].push(arr[1].shift());

      }
      if (d === "right") {

         arr[0].unshift(arr[2].pop());
         arr[1].unshift(arr[0].pop());
         arr[2].unshift(arr[1].pop());

      }



   } return arr



}



infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "right", 1),   // [[9,1,2],[3,4,5],[6,7,8]])
   infiniteLoop([[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]], "left", 2),// [[3,4],[5,6,7,8],[9,10,1,2]]);
   infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "left", 1)// [[2,3,4],[5,6,7],[8,9,1]]);
   ;
