// https://www.codewars.com/kata/573023c81add650b84000429/train/javascript


function countGrade(scores) {

    let obj = {
        S: scores.filter(x => x === 100).length,
        A: scores.filter(x => x >= 90 && x < 100).length,
        B: scores.filter(x => x >= 80 && x < 90).length,
        C: scores.filter(x => x >= 60 && x < 80).length,
        D: scores.filter(x => x >= 0 && x < 60).length,
        X: scores.filter(x => x === -1).length
    }
    return obj;
}



countGrade([50, 60, 70, 80, 90, 100]),// {S:1, A:1, B:1, C:2, D:1, X:0});
    countGrade([65, 75, , 85, 85, 95, 100, 100]),// {S:2, A:1, B:2, C:2, D:0, X:0});
    countGrade([-1, -1, -1, -1, -1, -1]) //, {S:0, A:0, B:0, C:0, D:0, X:6});