let arr=[4, 5, 6, 7,3];
var start = 0;
var end = arr.length - 1;
while (start < end) {
    var mid = Math.floor((start + end) / 2);

    // If middle element is greater than the end, the smallest element is in the right half
    if (arr[mid] > arr[end]) {
        start = mid + 1;
    } else {
        // Otherwise, it's in the left half
        end = mid;
    }
}

// After the loop, start and end will converge to the smallest element
console.log(arr[start]);
