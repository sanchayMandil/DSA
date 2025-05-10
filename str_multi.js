function multiply(num1, num2) {
    // Edge case: if one of the numbers is "0", return "0"
    if (num1 === "0" || num2 === "0") return "0";

    // Initialize an array to hold the result of the multiplication
    const result = Array(num1.length + num2.length).fill(0);

    // Start from the last digit of both numbers
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            // Multiply the digits and add to the corresponding position in the result
            const mul = (num1[i] ) * (num2[j] );
            const sum = mul + result[i + j + 1];

            // Update the result array
            result[i + j + 1] = sum % 10;   // Place the unit digit at the current position
            result[i + j] += Math.floor(sum / 10); // Carry over the tens digit to the next position
        }
    }

    // Convert the result array to a string
    let product = result.join('');
    
    // Remove leading zeros, if any
    while (product[0] === '0') {
        product = product.slice(1);
    }

    return product;
}

// Example usage:
console.log('1'-'4')
console.log(multiply("55", "20")); // Output: "6"
console.log(multiply("123", "456")); // Output: "56088"
