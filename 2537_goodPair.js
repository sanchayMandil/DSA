function countGood(nums, k) {
    let count = new Map();
    let pairs = 0, ans = 0;
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        pairs += count.get(nums[r]) || 0;
        count.set(nums[r], (count.get(nums[r]) || 0) + 1);

        while (pairs >= k) {
            let freq = count.get(nums[l]); 
            if (freq) pairs -= freq - 1; // Correctly adjust pairs before decrementing frequency
            count.set(nums[l], freq - 1);
            if (count.get(nums[l]) === 0) count.delete(nums[l]); // Clean up map entry
            l++;
        }

        ans += l;
    }

    return ans;
}
let  nums = [3,1,4,3,2,2,4], k = 2
console.log(countGood(nums,k));