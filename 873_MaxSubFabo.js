let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // Expected Output: 5
let arr1 = [1, 3, 7, 11, 12, 14, 18]; // Expected Output: 3
console.log(maxSubFab(arr));
console.log(maxSubFab(arr1));

function maxSubFab(arr) {
    let max_len = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] + arr[i + 1] > arr[arr.length - 1]) break;

        let res_index = search(arr[i] + arr[i + 1], i + 1, arr);
        if (res_index > i + 1) {
            let max = 3;
            max_len = Math.max(max_len, subSeq(i + 1, res_index, max, arr));
        }
    }
    return max_len;
}

function subSeq(first, second, cn, arr) {
    while (true) {
        const sum = arr[first] + arr[second];
        const res = search(sum, second + 1, arr);
        if (res > second) {
            cn++;
            first = second;
            second = res;
        } else {
            break;
        }
    }
    return cn;
}

function search(tar, start, arr) {
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === tar) return mid;
        else if (arr[mid] < tar) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}
