let nums = [10, 12, 19, 14];

function maxDigitSum(nums) {
    let digit_Map = new Map();
    let max = -1;
    
    for (let num of nums) {
        let digitSum = digit(num);
        if (!digit_Map.has(digitSum)) {
            digit_Map.set(digitSum, [num]);
        } else {
            let values = digit_Map.get(digitSum);
            values.push(num);
            
            // Keep only the two largest values
            if (values.length > 2) {
                values.sort((a, b) => b - a);
                values.pop(); // Remove the smallest one
            }
            
            // Update max sum if we have two numbers
            if (values.length === 2) {
                max = Math.max(max, values[0] + values[1]);
            }
        }
    }
    
    return max;
}

function digit(n) {
    let result = 0;
    while (n != 0) {
        result += n % 10;
        n = Math.floor(n / 10);
    }
    return result;
}

console.log(maxDigitSum(nums));
