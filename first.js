function binary_search(v_key){
    var start=0;
    var end = arr.length; 
    while(start<=end){
        var mid = (start+end)/2;
        if (arr[mid]==v_key)
            return 1;
        else if (arr[mid]<v_key)
            start = mid + 1;
        else
            end= mid-1; 
    }
    return -1;
}
let arr =[2,5,7,9,22,33];
console.log(arr);
const key = 33;
if (binary_search(key)== 1){
    console.log("present");
}
else{
    console.log("Not present");
}