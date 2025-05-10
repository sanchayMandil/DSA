var combinationSum2 = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b); // Sort to handle duplicates easily

    function backtrack(start, combo, remaining) {
        if (remaining === 0) {
            res.push([...combo]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            // If the current number is greater than the remaining target, break early
            if (candidates[i] > remaining) break;

            // Choose the number and move to the next step
            combo.push(candidates[i]);
            backtrack(i + 1, combo, remaining - candidates[i]);
            combo.pop(); // Backtrack and remove the number
        }
    }

    backtrack(0, [], target);
    return res;
};

// Example usage:
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));