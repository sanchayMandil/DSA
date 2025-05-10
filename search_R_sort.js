let arr= [3,5,6,7,10,1,2];
let start = 0,end = (arr.length-1),target = 10;
let exist= false;
while(start<=end){
    mid = Math.floor((start+end)/2);
    console.log("s "+start+" e "+end+" m "+mid);
    if(arr[mid]==target){
        exist = true;
        break;}
    if (arr[start] <= arr[mid]) { // Left half is sorted
        if (arr[start] <= target && target < arr[mid])
            end = mid - 1; // Target is in the left half
        else 
            start = mid + 1; // Target is in the right half
    }
     else { // Right half is sorted
        if (arr[mid] < target && target <= arr[end]) 
            start = mid + 1; // Target is in the right half
        else 
            end = mid - 1; // Target is in the left half
    }
}
console.log((exist==true)?"yes":"no")