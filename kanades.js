// let s="nitin";// reverse string print
// function rev(s,n){
//     if(n<=0)
//         return s[0];
//     return s[n] + rev(s,n-1);
// }
// var  result = rev(s,s.length-1);
// console.log(result);

// for fibonaci series nth posstion
// n =9;
// function fabo(n){
//     if(n<=1)
//         return n;
//     return fabo(n-1)+fabo(n-2);
// }
// console.log(fabo(9));

// sub sequence of aarray 
var subsets = function(nums) {
    function generateSubsets(index, current, result) {
        // Base case: if we've gone through all elements, add the current subset to the result
        if (index == nums.length) {
            result.push(current.slice()); // Add a copy of the current subset
            return ;
        }

        // Exclude the current element and move to the next
        generateSubsets(index + 1, current, result);

        // Include the current element in the subset and move to the next
        current.push(nums[index]);
        generateSubsets(index + 1, current, result);

        // Backtrack: remove the last added element (undo inclusion)
        current.pop();
    }

    let result = [];
    generateSubsets(0, [], result); // Start with the first element and an empty subset
    return result;
};

// Test the function
let nums = [1, 2, 3];
console.log(subsets(nums));
