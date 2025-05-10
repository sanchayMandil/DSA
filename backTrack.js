function combination(arr, target){
    let res = [];
    function Backtracking(combo, val ,Start){
        if(val == target){
            res.push(combo.slice());
            return;
        }
        if(val> target){
            return;
        }
        for(let i = Start ;i<arr.length ;i++){
            combo.push(arr[i]);
            Backtracking(combo , val + arr[i], i);
            combo.pop();
        }
    }
    Backtracking([],0,0);
    return res;
}
const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combination(candidates, target));