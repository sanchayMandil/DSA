function maxNp(nums) {
    let n = nums.length;
    
    // Find the first non-negative number
    let left = 0, right = n - 1, firstNonNegative = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] >= 0) {
            firstNonNegative = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    let negCount = firstNonNegative;

    // Find the first positive number
    left = negCount-1, right = n - 1, firstPositive = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > 0) {
            firstPositive = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    let posCount = n - firstPositive;

    return Math.max(negCount, posCount);
}

// Test the function with your given array
let nums =  [5,20,66,1314]
console.log(maxNp(nums));  // Output: 3
