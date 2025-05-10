let nums = [4,3,1,6], queries = [[0,2],[2,3]];
 var isArraySpecial = function(nums, queries) {
    const parityChanges = new Array(nums.length).fill(false);
    for (let i = 1; i < nums.length; i++) {
        // Check if adjacent numbers have different parity
        parityChanges[i] = (nums[i] % 2) !== (nums[i-1] % 2);
    }

    // Precompute prefix sum of parity changes
    const prefixSum = new Array(nums.length).fill(0);
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i-1] + (parityChanges[i] ? 1 : 0);
    }

    // Process queries with O(1) time complexity
    return queries.map(([start, end]) => {
        // If start to end has no parity violations, return true
        return start === end || 
               prefixSum[end] - prefixSum[start] === end - start;
    });
};