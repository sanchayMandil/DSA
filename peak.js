let arr = [1, 6,4, 3, 2];
var start = 0;
var end = arr.length - 1;
var ans = -1;

while (start <= end) {
    var mid = Math.floor(start + (end - start) / 2);

    // Handle edge cases
    if ((mid == 0 || arr[mid] > arr[mid - 1]) && 
        (mid == arr.length - 1 || arr[mid] > arr[mid + 1])) {
        ans = mid;
        break;
    } 
    else if (mid > 0 && arr[mid] < arr[mid - 1]) {
        end = mid - 1;
    } 
    else {
        start = mid + 1;
    }
}

console.log(ans);
