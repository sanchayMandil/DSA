/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    const MOD = 1e9 + 7;
    let sum = 0;
    let oddCount = 0;
    let evenCount = 1; // Starts with 1 to account for an empty subarray
    let result = 0;

    for (let num of arr) {
        sum += num;
        if (sum % 2 !== 0) {
            result = (result + evenCount) % MOD;
            oddCount++;
        } else {
            result = (result + oddCount) % MOD;
            evenCount++;
        }
    }

    return result;
};
