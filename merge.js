function mergeSort(array) {
    if (array.length <= 1) 
        return array; // Base case: A single element array is already sorted
    
    // Divide the array into two halves
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    // Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    // Merge the two sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let sortedArray = [];
    let i = 0;
    let j = 0;

    // Merge elements from both arrays in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;}
    }
    // If there are remaining elements in the left array, add them to the sorted array
    while (i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }
    // If there are remaining elements in the right array, add them to the sorted array
    while (j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }
    return sortedArray;
}
console.log(2.10000**3)
// Example usage:
const unsortedArray = [8, 2, 4, 3, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
